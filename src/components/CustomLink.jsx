import { Box } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
function CustomLink(props) {
  return (
    <>
      <Box as={Link} to={props.linked} style={{textDecoration:"none"}}>{props.children}</Box>
     
    </>
  )
}

export default CustomLink;