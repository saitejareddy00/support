import { Box, Typography } from "@mui/material";

const THEME = {
  textMuted: "#5a6d6f",
  accent: "#81B5A1",
};

/**
 * Renders the success content for the first question with the exact structure as provided.
 */
const FirstQuestionSuccessContent = () => (
  <Box sx={{ mb: 4, textAlign: "left" }}>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      Technically… I could.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      That would be the fastest operational step.  But then I paused.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      The customer temperature is high. The impact is critical.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      So I asked myself again:
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      "If I start investigating without informing the customer, will that build trust?"
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      No.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      So instead of silently working, I picked up the phone.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      I called the customer.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      I introduced myself as the case owner.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      I acknowledged the severity.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: THEME.textMuted, fontSize: "1rem" }}>
      I assured them:
    </Typography>
    <Box component="ul" sx={{ pl: 4, mb: 2, "& li": { mb: 1, lineHeight: 1.8, color: THEME.textMuted } }}>
      <li>This is being handled at the highest priority</li>
      <li>They will receive regular updates</li>
      <li>Our support team is fully committed to resolving this</li>
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
      textAlign='center'
    >
      TRUST STARTS WITH OWNERSHIP
    </Typography>
  </Box>
);

export { FirstQuestionSuccessContent };
