import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { ACTIONS } from "../reducers";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { ENDPOINTS } from "../constants/index.js";
import { Grid, Box } from "@mui/material";
import { mapProductInfo } from "../utils/productsUtils";
import ProductInfo from "../components/ProductInfo/ProductInfo.jsx";

const setCartProduct = (body) => {
  const bodyjson = JSON.stringify(body);
  return fetch(ENDPOINTS.ADD_PRODUCT_TO_CARD, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: bodyjson,
  }).then((response) => response.json());
};

const mapProductToCart = (product) => {
  return {
    id: product.id,
    colorCode: product.color.code,
    storageCode: product.storage.code,
  };
};

const getProductDetail = (id) => {
  const apiEndpoint = ENDPOINTS.GET_PRODUCT_DETAIL.replace(":id", id);
  return fetch(apiEndpoint).then((response) => response.json());
};

const ProductDetailPage = ({
  productId,
  addProduct,
  changeHeaderTitle,
  cartProducts,
}) => {
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
  }, [product]);

  const addToCart = useCallback(
    (productInfo) => {
      const id = `${cartProducts.length + 1}`.padStart(4, "0");
      const productCart = {
        ...productInfo,
        productId: prodId,
        id,
      };
      if (productCart) {
        setCartProduct(mapProductToCart(productCart)).then((data) => {
          console.log(data);
        });
        addProduct(productCart);
      }
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
            <img src={product.imgUrl} loading="lazy" alt={product.model}/>
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
    addProduct: (payload) => dispatch({ type: ACTIONS.addProduct, payload }),
    changeHeaderTitle: (payload) =>
      dispatch({ type: ACTIONS.changeHeaderTitle, payload }),
  };
};

const mapStateToProps = (state) => {
  return { cartProducts: state.products };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
