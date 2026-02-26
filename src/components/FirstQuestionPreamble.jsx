import { Box, Typography } from "@mui/material";

const THEME = {
  textMuted: "#5a6d6f",
};

/**
 * Renders the preamble for the first question with the exact structure as provided.
 */
const FirstQuestionPreamble = () => (
  <Box sx={{ mb: 3, textAlign: "left" }}>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      It was a very busy day. My queue was full. Priorities were shifting.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      Then I received a high-priority escalated case.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      The customer mentioned:
    </Typography>
    <Box component="ul" sx={{ pl: 4, mb: 2, "& li": { mb: 1, lineHeight: 1.4, color: THEME.textMuted } }}>
      <li>Business impact is critical</li>
      <li>Multiple users are affected</li>
      <li>The situation is urgent</li>
      <li>And the customer is very hot</li>
    </Box>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      At that moment, the pressure was real.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      As soon as I received the case, I asked myself:
    </Typography>
  </Box>
);

export { FirstQuestionPreamble };
