import React from "react";
import { connect } from "react-redux";
import { ACTIONS } from "../reducers";

const ProductCartPage = ({ removeProduct }) => {
  const deleteProduct = (id) => {
    removeProduct(id);
  }
  return <div>ProductCartPage</div>;
};
const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (value) =>
      dispatch({ type: ACTIONS.removeProduct, payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCartPage);
