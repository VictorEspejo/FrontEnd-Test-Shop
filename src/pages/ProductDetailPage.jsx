import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { ACTIONS } from "../reducers";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { ENDPOINTS } from "../constants";
import { Grid, Box } from "@mui/material";
import { mapProductInfo } from "../utils/productsUtils";
import ProductInfo from "../components/ProductInfo/ProductInfo";

const getProductDetail = (id) => {
  const apiEndpoint = ENDPOINTS.GET_PRODUCT_DETAIL.replace(":id", id);
  return fetch(apiEndpoint).then((response) => response.json());
};

const ProductDetailPage = ({ productId, addProduct, changeHeaderTitle }) => {
  const [product, setproduct] = useState({});
  const { id } = useParams();
  const prodId = productId || id;

  useEffect(() => {
    getProductDetail(prodId).then((res) => {
      setproduct(mapProductInfo(res));
    });
  }, []);

  useEffect(() => {
    changeHeaderTitle(product?.model);
  }, [product])

  const addToCart = useCallback(
    (productInfo) => {
      const productCart = { ...productInfo, productId: prodId };
      addProduct(productCart);
    },
    [addProduct]
  );

  return (
    <div>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={12} sm={6}>
          <Box sx={{ width: 300, height: 300, margin: "auto" }}>
            <img src={product.imgUrl} loading="lazy" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProductInfo {...product} addToCart={addToCart} />
        </Grid>
      </Grid>
    </div>
  );
};

ProductDetailPage.propTypes = {
  productId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (payload) =>
      dispatch({ type: ACTIONS.addProduct, payload }),
    changeHeaderTitle: (payload) => 
      dispatch({ type: ACTIONS.changeHeaderTitle, payload})
  };
};

export default connect(null, mapDispatchToProps)(ProductDetailPage);
