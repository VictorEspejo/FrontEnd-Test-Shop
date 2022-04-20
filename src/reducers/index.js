const initialValue = {
  products: [],
};

export const ACTIONS = {
  addProduct: "ADD_PRODUCT",
  removeProduct: "REMOVE_PRODUCT",
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case ACTIONS.addProduct:
      return [...state.products, action.payload];
    case ACTIONS.removeProduct:
      return state.products.filter((product) => product.id === action.payload);
    default:
      return state;
  }
};

export default reducer;
