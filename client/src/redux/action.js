//actions
import axios from 'axios'

export const getAllCategories = () => async (dispatch) => {


  try {

    const response = await axios.get("http://192.168.13.70:4000/api/dashboard")

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