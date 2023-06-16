import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo4.png";

const Footer = () => {
  return (
    <Box mt={"80px"} bgcolor={"#FFE9B1"}>
      <Stack gap={"40px"} alignItems={"center"} px={"40px"} pt={"24px"}>
        <Stack direction='row' gap='20px'>
          <img src={Logo} alt="logo" width={"70px"} height={"50px"}/>
          <Typography variant="h5" mt='10px'>The Energy Hub Gym</Typography>
        </Stack>
        <Typography variant="h5" pb={"40px"} mt={"20px"}>
          Made with ReactJS
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
