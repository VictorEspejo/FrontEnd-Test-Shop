import React from 'react'
import { connect } from 'react-redux'

const ProductCartPage = () => {
  return (
    <div>ProductCartPage</div>
  )
}
const mapStateToProps = (state) => {
    return { products: state.products };
};

export default connect(mapStateToProps)(ProductCartPage);