import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './index.css';

import {
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  ListItemText,
  Divider,
  Button,
  Grid
} from "@mui/material";
const ShoppingCartList = ({ products }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {products && products.length > 0 ? (
        products.map((product, index) => (
          <>
            <ListItem key={index}>
              <Link to={`/product/${product.productId}`}>
                <Grid container spacing={4} justifyContent alignItems={true}>
                  <Grid item xs={2}>
                    <ListItemAvatar>
                      <img
                        src={product.imgUrl}
                        className="productCartImage"
                        alt={`${product.model}-img`}
                      />
                    </ListItemAvatar>
                  </Grid>
                  <Grid item xs={4}>
                    <ListItemText
                      primary={product?.model}
                      secondary={`Almacenamiento: ${product?.storage?.name}`}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <ListItemText
                      primary={`Precio: ${product?.price}€`}
                      secondary={`Color: ${product?.color?.name}`}
                    />
                  </Grid>
                </Grid>
              </Link>
            </ListItem>
            <Divider />
          </>
        ))
      ) : (
        <Typography color="initial">No hay productos</Typography>
      )}
    </List>
  );
};

ShoppingCartList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ShoppingCartList;
