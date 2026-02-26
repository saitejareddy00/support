import { Box, Typography } from "@mui/material";

const THEME = {
  textMuted: "#5a6d6f",
};

/**
 * Renders the preamble for the third question with the exact structure as provided.
 */
const ThirdQuestionPreamble = () => (
  <Box sx={{ mb: 3, textAlign: "left" }}>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      After deeper analysis, I identified a custom business rule and script that appeared to be causing the issue.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      The conditions matched.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      The behavior aligned.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      I paused again and asked myself:
    </Typography>
  </Box>
);

export { ThirdQuestionPreamble };
