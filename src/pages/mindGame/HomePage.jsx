import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import agentSImage from "../../assets/agent_sri.jpeg";
import { CustomImageBox } from "../../components/CustomImage";

// ServiceNow brand colors
const SNOW = {
  darkGreen: "#293E40",
  lightGreen: "#81B5A1",
  darkGreenHover: "#1e2d2f",
  lightGreenHover: "#6fa08d",
  white: "#ffffff",
  offWhite: "#f5f7f6",
  gray: "#5a6d6f",
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${SNOW.darkGreen} 0%, #1e2d2f 50%, ${SNOW.darkGreen} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 6,
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={6}
        sx={{
          maxWidth: 640,
          textAlign: "center",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: SNOW.lightGreen,
            letterSpacing: 4,
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          TRUST MATTERS: A Support Story
        </Typography>

        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: SNOW.white,
            fontWeight: 700,
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
            lineHeight: 1.4,
          }}
        >
          by Agent S
        </Typography>

        <CustomImageBox imageSrc={agentSImage} priority />

        <Typography
          variant="body1"
          sx={{
            color: SNOW.offWhite,
            fontSize: { xs: "1rem", sm: "1.125rem" },
            lineHeight: 1.4,
          }}
        >
          Hi, I'm Agent S, a Technical Support Engineer.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: SNOW.offWhite,
            fontSize: { xs: "1rem", sm: "1.125rem" },
            lineHeight: 1.4,
          }}
        >
          I help customers tackle complex technical issues by delivering
          effective, accurate resolutions. But beyond solving problems, my focus
          is also on building lasting customer trust through clear
          communication, ownership, and reliable support at every step.
        </Typography>

        <Box mt={3}>
          <Typography
            variant="body1"
            sx={{
              color: SNOW.lightGreen,
              fontSize: { xs: "1rem", sm: "1.125rem" },
              lineHeight: 1.4,
              fontWeight: 600,
            }}
          >
            For me, it's not just about fixing issues — it's about earning
            confidence.
          </Typography>
        </Box>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/first-question")}
          sx={{

            px: 4,
            py: 1.5,
            backgroundColor: SNOW.lightGreen,
            color: SNOW.darkGreen,
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: 1.5,
            textTransform: "none",
            borderRadius: 2,
            boxShadow: `0 4px 14px 0 rgba(129, 181, 161, 0.35)`,
            "&:hover": {
              backgroundColor: SNOW.lightGreenHover,
              boxShadow: `0 6px 20px 0 rgba(129, 181, 161, 0.45)`,
            },
          }}
        >
          Let's Go
        </Button>
      </Stack>
    </Box>
  );
};

export { HomePage };
