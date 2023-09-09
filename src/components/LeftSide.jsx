import { Box } from '@mui/material'
import React from 'react'
import xyz from "../img/MUET_Logo.png";

function LeftSide() {
  return (
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
  )
}

export default LeftSide