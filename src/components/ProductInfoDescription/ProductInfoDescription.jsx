import React from "react"
import {
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const ProductInfoDescription = ({product}) => {

  const showCameraInfo = (camera, msg) => {
    // eslint-disable-next-line valid-typeof
    let prText = typeof camera === "array" ? camera.join() : camera;
    return `${msg}: ${prText}`;
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          {product.brand} {product.model}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" color="text.secondary">
              {product.ram}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" color="secondary">
              {product.price || "-"} €
            </Typography>
          </Grid>
        </Grid>
        <List>
          <ListItem>
            <ListItemText
              inset
              primary={"Procesador"}
              secondary={product.cpu}
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              inset
              primary={"Sistema Operativo"}
              secondary={product.os}
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              inset
              primary={"Resolucion"}
              secondary={product.displayResolution}
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              inset
              primary={"Bateria"}
              secondary={product.battery}
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              inset
              primary={"Dimensiones"}
              secondary={product.dimentions}
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              inset
              primary={"Peso"}
              secondary={`${product.weight || "-"} mg`}
            ></ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              inset
              primary={showCameraInfo(
                product.primaryCamera,
                "Camara Principal"
              )}
              secondary={showCameraInfo(
                product.secondaryCamera,
                "Camara Secundaria"
              )}
            ></ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default ProductInfoDescription;