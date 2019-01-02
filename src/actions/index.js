import axios from 'axios';

export function getData() {
  const request = axios.get(`https://api.aceandtate.com/api/frames`).then(response => {
    const products = response.data.reduce((totalProduct, raw) => {
      raw.variants.forEach(product => {
        totalProduct.push(product);
      });
      return totalProduct;
    }, []);
    return products;
  });

  return dispatch => {
    dispatch({
    type: "FETCH_DATA",
    data: request,
    })
  }
};