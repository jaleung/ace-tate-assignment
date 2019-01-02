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
    case "POP_ITEM":
      return {
        ...state,
        activeItem: action.activeItem
      };
    default:
      return state;
  }
};

export default rootReducers;
