import { useState } from "react"


import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const Intro = () => {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography>Welcome, Bienvenidos, Ahlan wa sahlan, Bienvenue, Välkommen</Typography>
        <Typography>Hi, I'm Myriam</Typography>
        <Typography>I am a DMV based Software Engineer with a passion for design. </Typography>
        <Button variant="outlined">More About Me</Button>


    
    </Box>
  )
}

export default Intro