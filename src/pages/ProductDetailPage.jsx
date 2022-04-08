import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { ENDPOINTS } from "../constants";

const getProductDetail = (id) => {
  const apiEndpoint = ENDPOINTS.GET_PRODUCT_DETAIL.replace(":id", id);
  return fetch(apiEndpoint).then((response) => response.json());
};

const ProductDetailPage = ({ productId }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const prodId = productId || id;

  useEffect(() => {
    getProductDetail(prodId).then((res) => setProduct(res));
  }, []);

  return <></>;
};

ProductDetailPage.propTypes = {
  productId: PropTypes.string,
};

export default ProductDetailPage;
