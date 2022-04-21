import React from "react";
import {
  Button,
  FormControl, 
  Select,
  InputLabel,
  MenuItem,
  Card,
  CardContent,
  CardActionArea,
  IconButton,
  Grid,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PropTypes from "prop-types";

const ProductInfoAction = (props) => {
  return (
    <Grid item marginBottom={4} xs={12}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Seleccione tipo de almacenamiento</InputLabel>
                <Select onChange={props.handleStorage}>
                  {(props?.storages || []).map((storage, index) => (
                    <MenuItem key={storage?.code} value={storage?.code}>
                      {storage?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Seleccione color</InputLabel>
                <Select onChange={props.handleColorChange}>
                  {(props?.colors || []).map((pcolor, index) => (
                    <MenuItem key={pcolor?.code} value={pcolor?.code}>
                      {pcolor?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActionArea>
          <Button onClick={props.handleSubmitButton} color={"primary"}>
            Añadir al carrito
            <IconButton>
              <AddShoppingCartIcon color="primary" />
            </IconButton>
          </Button>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

ProductInfoAction.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  storages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  handleColorChange: PropTypes.func,
  handleStorage: PropTypes.func,
  handleSubmitButton: PropTypes.func,
};

export default ProductInfoAction;
