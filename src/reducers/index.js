const defaultState = {
  data: [],
  activeItem: {}
};

const rootReducers = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default rootReducers;
