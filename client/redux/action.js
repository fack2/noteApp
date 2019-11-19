//actions

import axios from 'axios'

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