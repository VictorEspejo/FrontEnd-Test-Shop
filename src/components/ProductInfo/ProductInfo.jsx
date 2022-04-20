import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Grid,
} from "@mui/material";
import ProductInfoAction from "../ProductInfoAction/ProductInfoAction";
import ProductInfoDescription from "../ProductInfoDescription/ProductInfoDescription";

function ProductInfo(product) {
  const [cantidad, setcantidad] = useState(0);
  const [color, setcolor] = useState(0);

  const handleColorChange = (event) => {
    setcolor(event.target.value);
  };

  const handleAmountChange = (event) => {
      setcantidad(event.target.value);
  };

  return (
    <>
      {product ? (
        <>
          <Grid item marginBottom={4} xs={12}>
            <ProductInfoDescription product={product}/>
          </Grid>
          <ProductInfoAction
            colors={product?.options?.colors}
            storages={product?.options?.storages}
            handleColorChange={handleColorChange}
            handleAmountChange={handleAmountChange}
          />
        </>
      ) : (
        <Typography>Cargando...</Typography>
      )}
    </>
  );
}

ProductInfo.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.number,
  cpu: PropTypes.string,
  ram: PropTypes.string,
  os: PropTypes.string,
  displayResolution: PropTypes.string,
  battery: PropTypes.string,
  primaryCamera: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  secondaryCamera: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  dimentions: PropTypes.string,
  options: PropTypes.shape({
    colors: PropTypes.array,
    storages: PropTypes.array,
  }),
  weight: PropTypes.number,
};

export default ProductInfo;
