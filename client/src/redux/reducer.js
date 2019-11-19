
const initialState = {
  categories: [],
  loading: true,
  login: false,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_ALL_CATEGORIES':

      return {
        ...state,
        categories: state.categories.concat(action.data),
        loading: false,
      }
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case "LOGIN":
      return {
        ...state,
        login: action.login
      }
    default: return state
  }
}
export default reducer