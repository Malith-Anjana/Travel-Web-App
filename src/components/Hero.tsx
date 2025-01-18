import { Box, Typography } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import Button from "@mui/material/Button";
import heroImage from "../assets/images/heroImage.png";

const Hero = () => {
  return (
    <Box
      component="section"
      bgcolor="secondary.light"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
      borderRadius={5}
      my={6}
      flexDirection={{ xs: "column", md: "row" }}
    >
      {/* Left Section */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={{ xs: "center", md: "flex-start" }}
        textAlign={{ xs: "center", md: "left" }}
        p={3}
      >
        <Typography variant="h1" mb={{ xs: 3, lg: 6 }}>
          <strong>Start</strong> Your Holiday Planning Here!
        </Typography>
        <Typography variant="h2" mb={{ xs: 1.5, lg: 3 }}>
          Connect with a Local <strong>Destination Expert</strong> Online
        </Typography>
        <Typography variant="body1" mb={{ xs: 3, lg: 6 }}>
          Instantly connect with one of our destination experts from your
          preferred destinations! Our services are available 24/7.
        </Typography>
        <Button
          endIcon={<PlayArrowOutlinedIcon />}
        >
          Watch Intro
        </Button>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-end",
          padding: 2,
          paddingBottom: 0,
        }}
      >
        <img
          src={heroImage} // Replace with your image path
          alt="Hero Section"
          style={{
            maxWidth: "100%", // Make the image responsive
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
