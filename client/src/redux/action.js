//actions
import axios from 'axios'

export const getAllCategories = () => async (dispatch) => {


  try {

    const response = await axios.get("http://192.168.13.248:4000/api/dashboard")

    const data = response.data

    dispatch({
      type: 'GET_ALL_CATEGORIES',
      data,
    })

  }
  catch (e) {

    dispatch({
      type: 'LOADING',
    })

  }

}


export const checkLogin = (email, password) => async (dispatch) => {
  try {
    const data = await axios.post("http://192.168.13.248:4000/api/login", { email, password })
    const login = data.data.msg
    dispatch({
      type: 'LOGIN',
      login
    })
  }
  catch {
    console.log("ee", e);
  }
}