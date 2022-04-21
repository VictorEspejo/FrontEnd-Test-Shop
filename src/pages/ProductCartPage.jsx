import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ACTIONS } from "../reducers";
import ShoppingCartList from '../components/ShoppingCartList/ShoppingCartList'
import Container from '@mui/material/Container'

const ProductCartPage = ({ products, changeHeaderTitle }) => {
  useEffect(() => {
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
