import { useState } from "react"

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import React from 'react'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, color: "inherit"}} >
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ my: 2 , color: "black", fontWeight: 700}}>
        MYRIAM
      </Typography>
          <div />
          <IconButton
            size="large"
            edge="end"
            
            // fontFamily="playfair"
            // color="black"
            aria-label="menu"
            sx={{ mr: 2 ,  fontFamily: 'default' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar