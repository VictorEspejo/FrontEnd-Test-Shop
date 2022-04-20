import React, { useEffect, useState } from "react";
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

const ProductDetailPage = ({ productId }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const prodId = productId || id;

  useEffect(() => {
    getProductDetail(prodId).then((res) => {
      setProduct(mapProductInfo(res));
    });
  }, []);

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
          <Box sx={{ width: 300, height: 300, margin: 'auto' }}>
            <img src={product.imgUrl} loading="lazy" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProductInfo {...product} />
        </Grid>
      </Grid>
    </div>
  );
};

ProductDetailPage.propTypes = {
  productId: PropTypes.string,
};

export default ProductDetailPage;
