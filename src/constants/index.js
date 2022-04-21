const APP_ROUTES =  {
  PRODUCT_LIST: "/",
  PRODUCT_DETAIL: "/product/:id",
};

const API_ENDPOINT = "https://front-test-api.herokuapp.com/api"

const ENDPOINTS = {
  GET_PRODUCTS_LIST: `${API_ENDPOINT}/product`,
  GET_PRODUCT_DETAIL: `${API_ENDPOINT}/product/:id`,
  ADD_PRODUCT_TO_CARD: `${API_ENDPOINT}/cart`
};

export { APP_ROUTES, ENDPOINTS };