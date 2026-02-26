import { useState, useCallback, useEffect, useRef } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ReactConfetti from "react-confetti";
import {  CustomImageBox } from "./CustomImage";
import noHoverImg from '../assets/confused.PNG'
import defImg from '../assets/agent_sri.jpeg';

// ServiceNow light theme colors
const THEME = {
  background: "#f8faf9",
  surface: "#ffffff",
  text: "#293E40",
  textMuted: "#5a6d6f",
  accent: "#81B5A1",
  accentDark: "#293E40",
  border: "#e2e8e6",
  shadow: "rgba(41, 62, 64, 0.08)",
};

const BUTTON_WIDTH = 160;
const BUTTON_HEIGHT = 48;

const getRandomPosition = () => {
  const maxX = Math.max(0, window.innerWidth - BUTTON_WIDTH - 24);
  const maxY = Math.max(0, window.innerHeight - BUTTON_HEIGHT - 24);
  return {
    x: Math.floor(Math.random() * maxX) + 12,
    y: Math.floor(Math.random() * maxY) + 12,
  };
};

/**
 * Reusable Yes/No page with animated random flying button.
 *
 * @param {string} question - The question to display
 * @param {string|string[]} [preamble] - Story/context text shown before the question (legacy)
 * @param {React.ReactNode} [preambleContent] - Custom preamble component (overrides preamble when provided)
 * @param {string|string[]} successText - Text shown after Yes (string or array of paragraphs)
 * @param {React.ReactNode} [successContent] - Custom success content (overrides successTitle + successText when provided)
 * @param {string} [successImage] - Image src shown after Yes
 * @param {string} [defaultImage] - Image shown before answer
 * @param {string} [noHoverImage] - Image shown when hovering No
 * @param {function} [onYesClick] - Callback when Yes is clicked (e.g. navigate)
 * @param {number|null} [onYesClickDelay=4000] - Ms before auto-calling onYesClick
 * @param {boolean} [showNextButton=false] - If true, show a "Next" button instead of auto-navigating
 * @param {string} [nextButtonText='Continue']
 * @param {'yes'|'no'} [flyingButton='no'] - Which button flies (moves randomly on hover/click)
 * @param {function} [onFlyingButtonClick] - Callback when the flying button is clicked (runs in addition to move)
 * @param {function} [onNoClick] - Callback when stationary No is clicked (only when flyingButton='yes')
 * @param {string} [yesButtonText='Yes Obviously']
 * @param {string} [noButtonText='No Not at all']
 * @param {string} [successTitle='Yay!']
 * @param {'left'|'center'} [contentAlign='center'] - Alignment for preamble and success text
 */
const ReusableYesNoPage = ({
  question,
  preamble,
  preambleContent,
  successText,
  successContent,
  successImage,
  defaultImage = defImg,
  noHoverImage = noHoverImg,
  onYesClick,
  onYesClickDelay = 4000,
  showNextButton = false,
  nextButtonText = "Continue",
  flyingButton = "no",
  onFlyingButtonClick,
  yesButtonText = "Yes Obviously",
  noButtonText = "No Not at all",
  successTitle = "Yay!",
  contentAlign = "center",
}) => {
  const [flyingHovered, setFlyingHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const [showNoImage, setShowNoImage] = useState(false);
  const [imageTransition, setImageTransition] = useState({
    src: null,
    visible: false,
  });

  const displayImage =
    showNoImage && noHoverImage
      ? noHoverImage
      : accepted
      ? successImage
      : defaultImage || successImage;

  const hadImageRef = useRef(false);

  // Preload images on mount so they're cached before hover/display
  useEffect(() => {
    const toPreload = [noHoverImage, successImage, defaultImage].filter(Boolean);
    [...new Set(toPreload)].forEach((src) => {
      const url = typeof src === "string" ? src : src?.default;
      if (url) {
        const img = new Image();
        img.src = url;
      }
    });
  }, [noHoverImage, successImage, defaultImage]);

  useEffect(() => {
    if (displayImage) {
      hadImageRef.current = true;
      setImageTransition({ src: displayImage, visible: true });
    } else if (hadImageRef.current) {
      hadImageRef.current = false;
      setImageTransition((prev) => ({ ...prev, visible: false }));
      const id = setTimeout(() => setImageTransition({ src: null, visible: false }), 300);
      return () => clearTimeout(id);
    }
  }, [displayImage]);

  const handleYesClick = useCallback(() => {
    setAccepted(true);
    setFlyingHovered(false);
    setPosition({ x: 0, y: 0 });
    if (!showNextButton && typeof onYesClick === "function") {
      setTimeout(onYesClick, onYesClickDelay ?? 4000);
    }
  }, [onYesClick, onYesClickDelay, showNextButton]);

  const handleNextClick = useCallback(() => {
    if (typeof onYesClick === "function") {
      onYesClick();
    }
  }, [onYesClick]);

  const handleFlyingButtonInteraction = useCallback(() => {
    if (!accepted) {
      setFlyingHovered(true);
      setShowNoImage(true);
      setPosition(getRandomPosition());
      if (typeof onFlyingButtonClick === "function") {
        onFlyingButtonClick();
      }
    }
  }, [accepted, onFlyingButtonClick]);

  const handleFlyingButtonLeave = useCallback(() => {
    setTimeout(() => {
      setShowNoImage(false);
    }, 1000);
  }, []);


  const paragraphs = Array.isArray(successText)
    ? successText
    : successText
    ? [successText]
    : [];

  const preambleParagraphs = Array.isArray(preamble)
    ? preamble
    : preamble
    ? [preamble]
    : [];

  const isYesFlying = flyingButton === "yes";

  const yesButtonStyle = {
    minWidth: 140,
    backgroundColor: THEME.accent,
    color: THEME.accentDark,
    fontWeight: 600,
    boxShadow: "0 4px 14px 0 rgba(129, 181, 161, 0.35)",
    "&:hover": {
      backgroundColor: "#6fa08d",
      boxShadow: "0 6px 20px 0 rgba(129, 181, 161, 0.45)",
    },
  };

  const noButtonStyle = {
    minWidth: 140,
    backgroundColor: "#293E40",
    color: "#ffffff",
    fontWeight: 600,
    boxShadow: "0 4px 14px 0 rgba(41, 62, 64, 0.35)",
    "&:hover": {
      backgroundColor: "#1e2d2f",
      boxShadow: "0 6px 20px 0 rgba(41, 62, 64, 0.45)",
    },
  };

  const flyingButtonSx = {
    ...(isYesFlying ? yesButtonStyle : noButtonStyle),
    position: flyingHovered ? "fixed" : "relative",
    left: flyingHovered ? position.x : undefined,
    top: flyingHovered ? position.y : undefined,
    transition:
      "left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
    zIndex: 9999,
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        overflow: "visible",
        backgroundColor: THEME.background,
        py: 4,
      }}
    >
      {accepted && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
          recycle={false}
        />
      )}

      <Box
        sx={{
          position: "relative",
          maxWidth: 680,
          width: "100%",
          mx: 2,
          p: { xs: 3, sm: 4 },
          backgroundColor: THEME.surface,
          borderRadius: 3,
          boxShadow: `0 4px 24px ${THEME.shadow}`,
          border: `1px solid ${THEME.border}`,
          overflow: "visible",
        }}
      >
        {!accepted && (preambleContent ?? preambleParagraphs.length > 0) && (
          <Box
            sx={{
              mb: 3,
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              position: "relative",
            }}
          >
            <Box sx={{ flex: 1, minWidth: 0 }}>
              {preambleContent ? (
                preambleContent
              ) : (
                preambleParagraphs.map((para, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{
                      mb: 2,
                      textAlign: contentAlign,
                      lineHeight: 1.4,
                      color: THEME.textMuted,
                      fontSize: "1rem",
                    }}
                  >
                    {para}
                  </Typography>
                ))
              )}
            </Box>
            {imageTransition.src && (
              <Box
                sx={{
                  flexShrink: 0,
                  opacity: imageTransition.visible ? 1 : 0,
                  transform: imageTransition.visible
                    ? "scale(0.8)"
                    : "scale(0)",
                  transformOrigin: "center center",
                  filter:'drop-shadow(0 4px 12px rgba(41, 62, 64, 0.15))',
                  transition:
                    "opacity 0.5s ease-in-out, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  pointerEvents: "none",
                }}
              >
                <CustomImageBox imageSrc={imageTransition.src} compact/>
              </Box>
            )}
          </Box>
        )}

        {!accepted && (
          <Typography
            variant="h5"
            component="h1"
            sx={{
              textAlign: contentAlign,
              mb: 3,
              color: THEME.text,
              fontWeight: 600,
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
            }}
          >
            {question}
          </Typography>
        )}

        {accepted && successContent ? (
          successContent
        ) : accepted && (
          <>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                textAlign: contentAlign,
                mb: 3,
                color: THEME.accent,
                fontWeight: 700,
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                letterSpacing: 1,
              }}
            >
              {successTitle}
            </Typography>
            {paragraphs.length > 0 && (
              <Box sx={{ mb: 4 }}>
                {paragraphs.map((para, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{
                      mb: 2,
                      textAlign: contentAlign,
                      lineHeight: 1.4,
                      color: THEME.textMuted,
                      fontSize: "1rem",
                    }}
                  >
                    {para}
                  </Typography>
                ))}
              </Box>
            )}
          </>
        )}

        {!accepted && (
          <Stack
            direction="row"
            gap={2}
            justifyContent="center"
            alignItems="center"
            sx={{ position: "relative", minHeight: 56 }}
          >
            {isYesFlying ? (
              <>
                <Button
                  variant="contained"
                  onClick={handleFlyingButtonInteraction}
                  onMouseEnter={handleFlyingButtonInteraction}
                  onMouseLeave={handleFlyingButtonLeave}
                  sx={flyingButtonSx}
                >
                  {yesButtonText}
                </Button>
                <Button
                  variant="contained"
                  onClick={handleYesClick}
                  sx={noButtonStyle}
                >
                  {noButtonText}
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  onClick={handleYesClick}
                  sx={yesButtonStyle}
                >
                  {yesButtonText}
                </Button>
                <Button
                  variant="contained"
                  onClick={handleFlyingButtonInteraction}
                  onMouseEnter={handleFlyingButtonInteraction}
                  onMouseLeave={handleFlyingButtonLeave}
                  sx={flyingButtonSx}
                >
                  {noButtonText}
                </Button>
              </>
            )}
          </Stack>
        )}

        {accepted && showNextButton && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              variant="contained"
              onClick={handleNextClick}
              sx={{
                ...yesButtonStyle,
                px: 4,
                py: 1.5,
                minWidth: "auto",
              }}
            >
              {nextButtonText}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export { ReusableYesNoPage };
