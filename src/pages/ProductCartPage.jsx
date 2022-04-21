import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ACTIONS } from "../reducers";
import ShoppingCartList from '../components/ShoppingCartList/ShoppingCartList'
import Container from '@mui/material/Container'
import { ENDPOINTS } from "../constants";

const setCartProduct = (data) => { 
  debugger;
  return fetch(ENDPOINTS.ADD_PRODUCT_TO_CARD, {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(response => response.json());
 }

 const mapProductToCart = (products) => {
   const prod = products.map((product) => {
    return {
      id: product.productId,
      colorCode: product.color.code,
      storageCode: product.storage.code
    }
   })

   return prod;
 }

const ProductCartPage = ({ products, changeHeaderTitle }) => {
  useEffect(() => {
    if(products && products.length > 0){
      setCartProduct(mapProductToCart(products)).then(data => {
        debugger;
        console.log(data);
      });
    }
    changeHeaderTitle("Carrito de compra");
  }, []);

  return (
    <Container maxWidth="xs">
      <ShoppingCartList products={products} />
    </Container>
  );
};
const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeHeaderTitle: (payload) =>
      dispatch({ type: ACTIONS.changeHeaderTitle, payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCartPage);
