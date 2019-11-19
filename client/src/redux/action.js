//actions
import axios from 'axios'

export const getAllCategories = () => async (dispatch) => {
  dispatch({
    type: 'LOADING',
    loading: true

  })

  try {

    const response = await axios.get("http://192.168.13.248:4000/api/dashboard")

    const data = response.data

    dispatch({
      type: 'GET_ALL_CATEGORIES',
      data,
      loading: false
    })

  }
  catch (e) {

    dispatch({
      type: 'LOADING',
      loading: true

    })

  }

}


export const checkLogin = (email, password) => async (dispatch) => {
  dispatch({
    type: 'LOADING',
    loading: true
  })

  try {

    const data = await axios.post("http://192.168.13.248:4000/api/login", { email, password })
    const login = data.data.msg
   
    dispatch({
      type: 'LOGIN',
      login,
      loading: false
    })
  }
  catch {
    dispatch({
      type: 'LOADING',
      loading: true,
      login: false

    })
  }
}

export const logOut = () => async (dispatch) => {

  const data = await axios.get("http://192.168.13.248:4000/api/logout")
  const logout = data.data.message;
  dispatch({
    type: 'LOGOUT',
    logout
  })

}