import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductListPage = (props) => {
  const navigate = useNavigate();

  const onClickHandler = React.useCallback(
    (productId) => {
      navigate(`product/${productId}`);
    },
    [navigate]
  );
  return <div>ProductListPage</div>;
};

ProductListPage.propTypes = {};

export default ProductListPage;
