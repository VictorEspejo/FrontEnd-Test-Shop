import React, { useState, useEffect } from "react";
import { Input, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ProductItem from "../components/ProductItem/ProductItem";


const ProductListPage = ({ productList }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(productList);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = productList.filter((product) => {
      return (
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(results);
    console.log(searchResults);
  }, [searchTerm]);

  const onClickHandler = (productId) => {
    navigate(`product/${productId}`);
  };

  return (
    <Grid container>
      <Grid id="productlist-header" item container xs={12}>
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
        {searchResults.map((product, index) => (
          <Grid key={index} item xs={3}>
            <ProductItem product={product} onClick={()=> onClickHandler(product.id)} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
ProductListPage.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductListPage;
