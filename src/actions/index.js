import axios from "axios";

export function getData() {
  // const request = axios
  //   .get(`https://api.aceandtate.com/api/frames`)
  //   .then(response => {
  //     const products = response.data.reduce((totalProduct, raw) => {
  //       raw.variants.forEach(product => {
  //         totalProduct.push(product);
  //       });
  //       return totalProduct;
  //     }, []);
  //     return products;
  //   });

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

  // return {
  //   type: "FETCH_DATA",
  //   payload: {
  //     request: {
  //       url: "/frames"
  //     }
  //   }
  // };
}
