import React, { useState, useEffect } from "react";
import { Input, Grid, Typography, Skeleton } from "@mui/material";
import ProductItem from "../components/ProductItem/ProductItem.jsx";
import { Link } from "react-router-dom";
import { ENDPOINTS } from "../constants/index.js";
import { ACTIONS } from "../reducers";
import { connect } from "react-redux";

const ProductListPage = ({changeHeaderTitle}) => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataShowed, setdataShowed] = useState([]);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    changeHeaderTitle("Shopping List");
  }, []);

  useEffect(() => {
    console.log("Cargando...");
    if (isLoading && !productList.lenght) {
      fetch(ENDPOINTS.GET_PRODUCTS_LIST)
        .then((response) => response.json())
        .then((res) => {
          console.log("Datos: ", res);
          setProductList(res);
          setdataShowed(res);
          setisLoading(false);
        });
    }
  }, [isLoading]);

  useEffect(() => {
    if (productList) {
      const results = productList.filter((product) => {
        return (
          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.model.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setdataShowed(results);
      console.log(dataShowed);
    }
  }, [searchTerm]);

  return (
    <Grid container>
      <Grid id="productlist-header" item container xs={12} marginBottom={4}>
        <Grid item xs={8}>
          <Typography variant="h5" color="initial">
            List View
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Input
            type="text"
            placeholder="Buscar Productos"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Grid>
      </Grid>
      <Grid id="productlist-body" item container spacing={4} xs={12}>
        {!isLoading ? (
          dataShowed.map((product, index) => (
            <Grid key={index} item xs={3}>
              <Link to={`/product/${product.id}`}>
                <ProductItem product={product} />
              </Link>
            </Grid>
          ))
        ) : (
          <>
            <Grid item xs={3}>
              <Skeleton
                variant="rectangle"
                width={200}
                height={200}
                animation="wave"
              />
            </Grid>
            <Grid item xs={3}>
              <Skeleton
                variant="rectangle"
                width={200}
                height={200}
                animation="wave"
              />
            </Grid>
            <Grid item xs={3}>
              <Skeleton
                variant="rectangle"
                width={200}
                height={200}
                animation="wave"
              />
            </Grid>
            <Grid item xs={3}>
              <Skeleton
                variant="rectangle"
                width={200}
                height={200}
                animation="wave"
              />
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeHeaderTitle: (payload) =>
      dispatch({ type: ACTIONS.changeHeaderTitle, payload }),
  };
};

export default connect(null, mapDispatchToProps)(ProductListPage);
