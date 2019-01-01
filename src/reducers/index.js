import axios from "axios";

const defaultState = {
  data: []
};

const getData = () => {
  axios.get(`https://api.aceandtate.com/api/frames`).then(response => {
    const products = response.data.reduce((totalProduct, raw) => {
      raw.variants.forEach(product => {
        totalProduct.push(product);
      });
      return totalProduct;
    }, []);
    return products;
  });
};

const rootReducers = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      const data = getData();
      return {
        ...state,
        data: data
      };
    default:
      return state;
  }
};

export default rootReducers;
