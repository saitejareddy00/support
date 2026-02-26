import { Box, Typography } from "@mui/material";

const THEME = {
  textMuted: "#5a6d6f",
  accent: "#81B5A1",
};

/**
 * Renders the success content for the second question with the exact structure as provided.
 */
const SecondQuestionSuccessContent = () => (
  <Box sx={{ mb: 4, textAlign: "left" }}>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      It might seem efficient.    But then I thought:
    </Typography>
    
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      "If I were the customer, waiting during a critical outage, would silence make me confident?"
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      No.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      So instead of continuous silent investigation, I updated them.
    </Typography>
    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.4, color: THEME.textMuted, fontSize: "1rem" }}>
      I shared:
    </Typography>
    <Box component="ul" sx={{ pl: 4, mb: 2, "& li": { mb: 1, lineHeight: 1.4, color: THEME.textMuted } }}>
      <li>What I had reviewed so far</li>
      <li>Initial observations</li>
      <li>The next troubleshooting steps</li>
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
      TRUST GROWS WHEN CUSTOMERS SEE PROGRESS - EVEN BEFORE RESOLUTION
    </Typography>
  </Box>
);

export { SecondQuestionSuccessContent };
