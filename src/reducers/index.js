const defaultState = {
  data: []
};


const rootReducers = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export default rootReducers;
