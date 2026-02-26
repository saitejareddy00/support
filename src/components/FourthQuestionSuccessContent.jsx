import { Box, Typography } from "@mui/material";

const THEME = {
  textMuted: "#5a6d6f",
  accent: "#81B5A1",
};

/**
 * Renders the success content for the fourth question with the exact structure as provided.
 */
const FourthQuestionSuccessContent = () => (
  <Box sx={{ mb: 4, textAlign: "left" }}>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      I could.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      But then I thought:
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      "Does sending a written solution alone build maximum confidence?"
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      Not always.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      So I scheduled a call.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      On that call:
    </Typography>
    <Box component="ul" sx={{ pl: 4, mb: 2, "& li": { mb: 1, lineHeight: 1.4, color: THEME.textMuted } }}>
      <li>I explained the root cause clearly</li>
      <li>Walked them through the resolution</li>
      <li>Performed live validation where possible</li>
      <li>Answered every question patiently</li>
    </Box>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      Only after ensuring they were comfortable did I move the case forward.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      And I reassured them:
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem", fontStyle: "italic" }}>
      "If you face any challenges while implementing this, please update the case. I'm here to support you."
    </Typography>
    <Typography
      variant="h5"
      component="p"
      sx={{
        fontWeight: 700,
        color: THEME.accent,
        letterSpacing: 1,
        fontSize: { xs: "1.25rem", sm: "1.5rem" },
      }}
      textAlign='center'
    >
      TRUST DOESN'T END WITH FIX.<br />
       IT CONTINUES WITH SUPPORT
    </Typography>
  </Box>
);

export { FourthQuestionSuccessContent };
