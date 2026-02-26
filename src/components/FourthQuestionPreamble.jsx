import { Box, Typography } from "@mui/material";

const THEME = {
  textMuted: "#5a6d6f",
};

/**
 * Renders the preamble for the fourth question with the exact structure as provided.
 */
const FourthQuestionPreamble = () => (
  <Box sx={{ mb: 3, textAlign: "left" }}>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      After testing, it was confirmed — the custom configuration was indeed the root cause.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      Now I asked myself one final question:
    </Typography>
  </Box>
);

export { FourthQuestionPreamble };
