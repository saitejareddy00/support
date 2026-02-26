import { Box, Typography } from "@mui/material";

const SNOW = {
  darkGreen: "#293E40",
  lightGreen: "#81B5A1",
  textMuted: "#5a6d6f",
};

const TrustStoryFinalPage = () => (
  <Box
    sx={{
      minHeight: "100vh",
      background: `linear-gradient(180deg, #f8faf9 0%, #eef5f2 50%, #f8faf9 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      px: 3,
      py: 8,
    }}
  >
    <Box
      sx={{
        maxWidth: 640,
        width: "100%",
      }}
    >
      <Typography
        variant="overline"
        sx={{
          color: SNOW.lightGreen,
          letterSpacing: 4,
          fontWeight: 600,
          fontSize: "0.85rem",
          display: "block",
          mb: 3,
        }}
        textAlign='center'
      >
        THE JOURNEY
      </Typography>

      <Typography
        variant="h5"
        component="h1"
        sx={{
          color: SNOW.darkGreen,
          fontWeight: 600,
          fontSize: { xs: "1.25rem", sm: "1.5rem" },
          lineHeight: 1.6,
          mb: 4,
        }}
      >
        Throughout this case, at every stage, I had a choice:
      </Typography>

      <Box
        component="ul"
        sx={{
          listStyle: "none",
          pl: 0,
          mb: 4,
          "& li": {
            position: "relative",
            pl: 4,
            mb: 2,
            fontSize: "1.1rem",
            lineHeight: 1.4,
            color: SNOW.textMuted,
            "&::before": {
              content: '"•"',
              position: "absolute",
              left: 0,
              color: SNOW.lightGreen,
              fontWeight: 700,
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <li>Work silently or communicate</li>
        <li>Assume or validate</li>
        <li>Document or explain</li>
      </Box>

      <Typography
        variant="body1"
        sx={{
          color: SNOW.darkGreen,
          fontSize: { xs: "1rem", sm: "1.125rem" },
          lineHeight: 1.4,
          fontWeight: 500,
          mb: 3,
        }}
      >
        Every time, I asked myself:
      </Typography>

      <Typography
        variant="h6"
        component="blockquote"
        sx={{
          color: SNOW.lightGreen,
          fontSize: { xs: "1.1rem", sm: "1.25rem" },
          lineHeight: 1.7,
          fontStyle: "italic",
          borderLeft: `4px solid ${SNOW.lightGreen}`,
          pl: 3,
          py: 1,
          my: 4,
          textAlign: "left",
        }}
      >
        "Will this action build or reduce customer trust?"
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: SNOW.textMuted,
          fontSize: { xs: "1rem", sm: "1.125rem" },
          lineHeight: 1.9,
          mb: 3,
        }}
      >
        Because customer trust is not built in the final solution.
      </Typography>

      <Box
        sx={{
          mt: 6,
          pt: 4,
          borderTop: `2px solid ${SNOW.lightGreen}`,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: SNOW.textMuted,
            fontSize: { xs: "1rem", sm: "1.125rem" },
            lineHeight: 1.9,
            mb: 1,
          }}
        >
          Technical skills resolve issues.
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            color: SNOW.lightGreen,
            fontWeight: 700,
            fontSize: { xs: "1.35rem", sm: "1.6rem" },
            letterSpacing: 1,
          }}
          textAlign='center'
        >
          But trust creates partnerships.
        </Typography>
      </Box>

      <Typography
        variant="overline"
        sx={{
          color: SNOW.lightGreen,
          letterSpacing: 3,
          fontWeight: 600,
          fontSize: "0.8rem",
          display: "block",
          mt: 6,
        }}
        textAlign='center'
      >
        — Agent S
      </Typography>
    </Box>
  </Box>
);

export { TrustStoryFinalPage };
