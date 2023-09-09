import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import xyz from "../img/MUET_Logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Box sx={{ width: "100%", height: "100%", display: "flex", m: "auto" }}>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={xyz}
              alt="logo"
              width="155px"
              height="155px"
              style={{ borderRadius: "100%", marginBottom: "1rem" }}
            />
            <p style={{ fontSize: "28px", textAlign: "center" }}>
              <span style={{ color: "#116bcc", fontWeight: "bold" }}>
                MUET Portal{" "}
              </span>
              for <span style={{ fontWeight: "bold" }}>undergraduate</span>{" "}
              students
              <br />
              to submit their{" "}
              <span style={{ color: "#116bcc", fontWeight: "bold" }}>
                thesis
              </span>{" "}
              and{" "}
              <span style={{ color: "#116bcc", fontWeight: "bold" }}>
                project
              </span>
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Paper
              elevation={5}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "496px",
                width: "396px",
                padding: "1.5rem",
                borderRadius: "8px",
              }}
            >
              <TextField
                style={{ marginBottom: "1.5rem", color: "#dddfe2" }}
                id="outlined-basic"
                label="Email address"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                style={{ marginBottom: "1.5rem" }}
              />
              <Link to="signup">Sign in</Link>
              <Button variant="contained" style={{ marginBottom: "1.5rem" }}>
                Sign in
              </Button>
              <Typography style={{ color: "#116bcc", textAlign: "center" }}>
                Forgotten Password?
              </Typography>
              <Divider style={{ marginTop: "2rem", color: "gray" }} />
              <Box style={{width:'100%', textAlign:'center',marginTop:'2rem'}}>
                <Button variant="contained" size="medium" color="success">
                  Create new account
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
