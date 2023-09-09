import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomLink from './CustomLink'
import { Link } from 'react-router-dom'

function RightSide() {
  return (
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

              <Link to="signup" style={{ width: "100%" }}>
                <Button
                  variant="contained"
                  style={{ marginBottom: "1.5rem", width: "100%" }}
                >
                  Sign in
                </Button>
              </Link>
              <CustomLink linked="forgottenPassword">
                <Typography style={{ color: "#116bcc", textAlign: "center" }}>
                  Forgotten Password?
                </Typography>
              </CustomLink>
              <Divider style={{ marginTop: "2rem", color: "gray" }} />
              <Box
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "2rem",
                }}
              >
                <Link to="newAccount" style={{width:'100%'}}>
                <Button variant="contained" size="medium" color="success" width="100%">
                  Create new account
                </Button>
                </Link>
              </Box>
            </Paper>
          </Box>
        </Box>

  )
}

export default RightSide