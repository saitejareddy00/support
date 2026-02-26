import { Box, Typography } from "@mui/material";

const THEME = {
  textMuted: "#5a6d6f",
};

/**
 * Renders the preamble for the second question with the exact structure as provided.
 */
const SecondQuestionPreamble = () => (
  <Box sx={{ mb: 3, textAlign: "left" }}>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      I began deep analysis.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      I reviewed logs.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      I checked configuration scripts.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      I reached out to a senior internal team member.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      Time was passing.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      Then I asked myself:
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      "Should I continue investigating quietly until I find the root cause?"
    </Typography>
  </Box>
);

export { SecondQuestionPreamble };
