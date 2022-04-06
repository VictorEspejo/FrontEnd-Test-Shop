import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Grid, Typography } from '@mui/material';


const ProductListPage = (props) => {
  const navigate = useNavigate();

  const onClickHandler = React.useCallback(
    (productId) => {
      navigate(`product/${productId}`);
    },
    [navigate]
  );
  return (
    <Grid container>
      <Grid item xs={8}>
        <Typography variant="h5" color="initial">
          List View
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Input placeholder="Buscar Productos" inputProps={'fadsf'} />
      </Grid>
      <Grid item xs={12}>
        
      </Grid>
    </Grid>
  );
};

ProductListPage.propTypes = {};

export default ProductListPage;
