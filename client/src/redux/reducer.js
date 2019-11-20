const initialState = {
  categories: [],
  notes: [],
  loading: true,
  login: false,
  logout: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES':
      return {
        ...state,
        categories: action.data,
        loading: action.loading,
      }
    case 'LOADING':
      return {
        ...state,
        loading: action.loading
      }
    case "LOGIN":
      return {
        ...state,
        login: action.login,
        loading: action.loading,
      }
    case "LOGOUT":
      return {
        ...state,
        logout: action.logout
      }
    case 'GET_ALL_NOTES':
      return {
        ...state,
        notes: state.notes.concat(action.data.data),
        loading: false,
      };
    default: return state
  }
};
export default reducer;
