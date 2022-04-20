import React from "react";
import {
    Button,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";

const ProductInfoAction = (props) => {
  return (
    <Grid item marginBottom={4} xs={12}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography>Seleccione la cantidad</Typography>
              <TextField
                onChange={props.handleAmountChange}
                id="outlined-number"
                label="Cantidad"
                type="number"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Seleccione el color</Typography>
              <FormControl>
                <InputLabel>Color</InputLabel>
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
                    <Button  color={"primary"}>Añadir al carrito</Button>
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
  handleColorChange: PropTypes.func.isRequired,
  handleAmountChange: PropTypes.func.isRequired,
};

export default ProductInfoAction;
