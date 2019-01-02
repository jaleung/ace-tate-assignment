import axios from "axios";

const apiUrl = `https://api.aceandtate.com/api/frames`;

const getProducts = response => {
  return response.data.reduce((totalProduct, raw) => {
    raw.variants.forEach(product => {
      totalProduct.push(product);
    });
    return totalProduct;
  }, []);
};

export function getData() {
  return dispatch => {
    axios.get(apiUrl).then(response => {
      const products = getProducts(response);
      dispatch({
        type: "FETCH_DATA",
        payload: products
      });
    });
  };
}

export function popItemToState(item, isFromHome = false) {
  if (!isFromHome) {
    return dispatch => {
      axios.get(apiUrl).then(response => {
        const filteredItem = getProducts(response).filter(
          product => product.sku === item
        );
        dispatch({
          type: "POP_ITEM",
          activeItem: filteredItem[0]
        });
      });
    };
  } else {
    return dispatch => {
      dispatch({
        type: "POP_ITEM",
        activeItem: item
      });
    };
  }
}
