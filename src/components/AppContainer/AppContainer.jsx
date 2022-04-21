import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductCartPage from "../../pages/ProductCartPage.jsx";
import ProductDetailPage from "../../pages/ProductDetailPage.jsx";
import ProductListPage from "../../pages/ProductListPage.jsx";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const AppContainer = () => {
  return (
    <Container fixed>
      <Grid item xs />
      <Grid item xs={12} paddingTop={2}>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="shopping-cart" element={<ProductCartPage />} />
        </Routes>
      </Grid>
      <Grid item xs />
    </Container>
  );
};

export default AppContainer;
