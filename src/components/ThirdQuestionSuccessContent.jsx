import { Box, Typography } from "@mui/material";

const THEME = {
  textMuted: "#5a6d6f",
  accent: "#81B5A1",
};

/**
 * Renders the success content for the third question with the exact structure as provided.
 */
const ThirdQuestionSuccessContent = () => (
  <Box sx={{ mb: 4, textAlign: "left" }}>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      It was tempting.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      It seemed obvious.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      But then I thought:
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      "What if I'm wrong? What happens to trust if I give an unvalidated fix?"
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      Trust would break.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      So instead of rushing, I validated.
    </Typography>
    <Box component="ul" sx={{ pl: 4, mb: 2, "& li": { mb: 1, lineHeight: 1.8, color: THEME.textMuted } }}>
      <li>If in sub-production, I tested by temporarily disabling the script.</li>
      <li>If only in production, I gathered strong log evidence.</li>
      <li>I ensured safe testing before recommending production changes.</li>
    </Box>
    <Typography
      variant="h5"
      component="p"
      sx={{
        fontWeight: 700,
        color: THEME.accent,
        letterSpacing: 1,
        fontSize: { xs: "1.25rem", sm: "1.5rem" },
      }}
    >
      ACCURACY BUILDS TRUST
    </Typography>
  </Box>
);

export { ThirdQuestionSuccessContent };
