import axios from "axios";

export function getData() {
  return dispatch => {
    axios.get(`https://api.aceandtate.com/api/frames`).then(response => {
      const products = response.data.reduce((totalProduct, raw) => {
        raw.variants.forEach(product => {
          totalProduct.push(product);
        });
        return totalProduct;
      }, []);
      dispatch({
        type: "FETCH_DATA",
        payload: products
      });
    });
  };
}

export function popItemToState(item) {
  return dispatch => {
    dispatch({
      type: "POP_ITEM",
      activeItem: item
    });
  };
}
