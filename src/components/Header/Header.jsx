import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Link to="/">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
        </Link>
        <Typography variant="h6">MENU</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;