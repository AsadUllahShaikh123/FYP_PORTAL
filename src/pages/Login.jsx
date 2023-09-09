import {
  Box,
} from "@mui/material";
import React from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

function Login() {
  return (
    <>
      <Box sx={{ width: "100%", height: "100%", display: "flex", m: "auto" }}>
        <LeftSide/>
        <RightSide/>
      </Box>
    </>
  );
}

export default Login;
