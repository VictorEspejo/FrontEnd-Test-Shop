import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ products, headerTitle }) => {
  const [cartLenght, setcartLenght] = useState(0);

  useEffect(() => {
    if (products) {
      setcartLenght(products.length);
    }
  }, [products]);

  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Link to="/">
            <Menu color="action" />
          </Link>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {headerTitle}
        </Typography>
        <Badge badgeContent={cartLenght} color="secondary">
          <Link to="shopping-cart">
            <ShoppingCartCheckoutIcon color="action" />
          </Link>
        </Badge>
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = (state) => {
  return { products: state.products, headerTitle: state.headerTitle };
};

export default connect(mapStateToProps)(Header);
