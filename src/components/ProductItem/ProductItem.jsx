import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const ProductItem = ({
  product: {id, imgUrl, brand,model, price}
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        width={180}
        height={180}
        image={imgUrl}
        alt={`${brand}-${model}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {model}
        </Typography>
        <Typography variant="body2" color="secondary">
          {brand}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography color={"secondary"}>{price || "-"}€</Typography>
      </CardActions>
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    imgUrl: PropTypes.string,
  }).isRequired
};

export default ProductItem;
