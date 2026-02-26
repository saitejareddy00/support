import { useMediaQuery, useTheme, Box} from "@mui/material";

const CustomImage = ({ imageSrc }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <img
      src={imageSrc}
      className="logo"
      alt="Vite logo"
      height={smallScreen ? "300px" : "600px"}
    />
  );
};

const CustomImageBox = ({ imageSrc, priority, compact }) => {
  const size = compact
    ? { width: 150,height: '150px' }
    : { width: { xs: 200, sm: 250, md: 300 }, height: { xs: 170, sm: 245, md: 320 } };
  return (
    <Box
      sx={{
        ...size,
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.3)`,
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt="Agent S"
        sx={{
          width: compact ? 150 : { xs: 200, sm: 250, md: 300 },
          height: "auto",
          display: "block",
          mt: compact ? "-20px" : "-36px",
        }}
      />
    </Box>
  );
};

export { CustomImage,CustomImageBox };
