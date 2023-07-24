import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImg from "../assets/images/banner2.jpg";
import { Link } from 'react-scroll'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#7743DB" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        // color="error"
        href="#exercises"
        sx={{ backgroundColor: "#3700B3", padding: "10px" }}
      >
        <Link
          activeClass="active"
          spy={true}
          to="exercises"
          smooth={true}
          duration={500}
          style={{
          textDecoration: 'none',
          color: '#FCFDF2',
          behavior: 'smooth',
          cursor: 'pointer',
          // borderBottom: "3px solid #3700B3"
        }}
        >Explore Exercises</Link>
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#7743DB"
        sx={{ opacity: 0.2, display: { lg: "block", xs: "none" } }}
      >
        Exercises
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
