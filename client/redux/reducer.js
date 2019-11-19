
const initialState = {
  email: "",
  password: "",
  errorMsg: "",
  login: false,
  success: false,
}

// reducer function


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: action.login
      }
    default: return state
  }
}
export default reducer