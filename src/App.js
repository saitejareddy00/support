import { useEffect } from "react";
import "./App.css";
import { Box, Button } from "@mui/material";
import { useRoutes, useNavigate } from "react-router-dom";
import { HomePage } from "./pages/mindGame/HomePage";
import agentSImage from "./assets/agent_s.PNG";
import { FirstQuestionPage } from "./pages/mindGame/FirstQuestion";
import { SecondQuestionPage } from "./pages/mindGame/SecondQuestion";
import { ThirdQuestionPage } from "./pages/mindGame/ThirdQuestion";
import { FourthQuestionPage } from "./pages/mindGame/FourthQuestion";
import { TrustStoryFinalPage } from "./pages/mindGame/TrustStoryFinalPage";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = agentSImage;
  }, []);

  const routes = [
    {
      id: "0",
      name: "home",
      path: "/",
      showInSideNav: false,
      element: <HomePage />,
    },
    {
      id: "1",
      name: "firstQuestion",
      path: "/first-question",
      showInSideNav: false,
      element: <FirstQuestionPage />,
    },
    {
      id: "2",
      name: "secondQuestion",
      path: "/second-question",
      showInSideNav: false,
      element: <SecondQuestionPage />,
    },
    {
      id: "3",
      name: "thirdQuestion",
      path: "/third-question",
      showInSideNav: false,
      element: <ThirdQuestionPage />,
    },
    {
      id: "4",
      name: "fourthQuestion",
      path: "/fourth-question",
      showInSideNav: false,
      element: <FourthQuestionPage />,
    },
    {
      id: "5",
      name: "final",
      path: "/final",
      showInSideNav: false,
      element: <TrustStoryFinalPage />,
    },
  ];

  const Content = useRoutes(routes);

  return (
    <Box
      sx={{ width: { md: "100vw" }, minHeight: "100vh", position: "relative" }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1100,
        }}
      >
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "rgba(255,255,255,0.9)",
            color: "#293E40",
            borderColor: "#81B5A1",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#81B5A1",
              color: "#ffffff",
              borderColor: "#81B5A1",
            },
          }}
        >
          Home
        </Button>
      </Box>
      <Box sx={{ m: { md: 0, xs: 2 }, pt: 0 }}>{Content}</Box>
    </Box>
  );
}

export default App;
