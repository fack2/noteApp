const initialState = {
  categories: [],
  notes: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES':
      return {
        ...state,
        categories: state.categories.concat(action.data),
        loading: false,
      };
    case 'GET_ALL_NOTES':
      return {
        ...state,
        notes: state.notes.concat(action.data.data),
        loading: false,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default reducer;
