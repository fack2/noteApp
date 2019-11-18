//actions
import axios from 'axios'
export const getAllCategories = () => async (dispatch) => {
  const response = await axios.get("http://192.168.13.70:4000/api/dashboard")

  dispatch({
    type: 'GET_ALL_CATEGORIES',
    response,
  })
}