import { Box, Paper } from "@mui/material";
import React from "react";
import xyz from '../img/MUET_Logo.png'

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
          <Box style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
            <img src={xyz} alt="logo" width="155px" height="155px" style={{borderRadius:'100%',marginBottom:'1rem'}}/>
            <p style={{fontSize:'28px',textAlign:'center'}}>
              <span style={{color:'#116bcc',fontWeight:'bold'}}>MUET Portal </span>
              for <span style={{fontWeight:'bold'}}>undergraduate</span> students
              <br />
              to submit their <span style={{color:'#116bcc',fontWeight:'bold'}}>thesis</span> and <span style={{color:'#116bcc',fontWeight:'bold'}}>project</span>
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            border: "2px solid black",
            display: "flex",
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <Box style={{border:'2px solid black'}}>
                <Paper elevation={3}>
                    
                </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
