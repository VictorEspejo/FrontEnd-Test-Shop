import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Grid } from "@mui/material";
import ProductInfoAction from "../ProductInfoAction/ProductInfoAction.jsx";
import ProductInfoDescription from "../ProductInfoDescription/ProductInfoDescription.jsx";

function ProductInfo(product) {
  const [storage, setstorage] = useState(0);
  const [color, setcolor] = useState(0);
  const [colorError, setcolorError] = useState(false);
  const [storageError, setstorageError]= useState(false);

  const handleColorChange = (event) => {
    setcolor(event.target.value);
  };

  const handleStorage = (event) => {
    setstorage(event.target.value);
  };

  const handleSubmit = () => {
    const { imgUrl, price, model, options } = product;
    const pStorage = options.storages.find(item => item.code === storage) || null;
    const pColor = options.colors.find(item => item.code === color) || null;
    if(pStorage && pColor){
      product.addToCart({ storage: pStorage, color: pColor, imgUrl, price, model });
    }else{
      setstorageError(!pStorage);
      setcolorError(!pColor);
    }
  };

  return (
    <>
      {product ? (
        <>
          <Grid item marginBottom={4} xs={12}>
            <ProductInfoDescription product={product} />
          </Grid>
          <ProductInfoAction
            colors={product?.options?.colors}
            storages={product?.options?.storages}
            colorError={colorError}
            storageError={storageError}
            handleColorChange={handleColorChange}
            handleStorage={handleStorage}
            handleSubmitButton={handleSubmit}
          />
        </>
      ) : (
        <Typography>Cargando...</Typography>
      )}
    </>
  );
}

ProductInfo.propTypes = {
  addToCart: PropTypes.func,
  imgUrl: PropTypes.string,
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
