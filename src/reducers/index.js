const initialValue = {
  products: [],
  headerTitle: "Shopping List"
};

export const ACTIONS = {
  addProduct: "ADD_PRODUCT",
  changeHeaderTitle: "CHANGE_HEADER_TITLE"
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
  case ACTIONS.addProduct:
    return {...state, products: [...state.products, action.payload]};
  case ACTIONS.changeHeaderTitle:
    return { ...state, headerTitle: action.payload };
  default:
    return state;
  }
};

export default reducer;
