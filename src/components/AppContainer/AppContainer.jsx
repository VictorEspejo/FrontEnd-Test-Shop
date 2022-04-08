import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetailPage from "../../pages/ProductDetailPage";
import ProductListPage from "../../pages/ProductListPage";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ENDPOINTS } from "../../constants";

const getProductList = async () =>
  fetch(ENDPOINTS.GET_PRODUCTS_LIST).then((response) => response.json());

const AppContainer = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      getProductList().then((res) => setProductList(res));
    };
    getProducts();
  }, []);

  return (
    <Container fixed>
      <Grid item xs />
      <Grid item xs={12} paddingTop={2}>
        <Routes>
          <Route
            path="/"
            element={<ProductListPage productList={productList} />}
          />
          <Route path="product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Grid>
      <Grid item xs />
    </Container>
  );
};

export default AppContainer;
