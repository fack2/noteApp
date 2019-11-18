
const initialState = {
  categories: [],
}

// reducer function


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_ALL_CATEGORIES':
      return {
        ...state,
        categories: state.categories.concat([action.categories]),
      }
    default: return state
  }
}
export default reducer