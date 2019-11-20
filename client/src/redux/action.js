//actions
import axios from 'axios';

export const getAllCategories = () => async dispatch => {
  try {
    const response = await axios.get('http://192.168.13.70:4000/api/dashboard');

    const data = response.data;

    dispatch({
      type: 'GET_ALL_CATEGORIES',
      data,
    });
  } catch (e) {
    dispatch({
      type: 'LOADING',
    });
  }
};

export const getAllNotes = (category_id, user_id) => async dispatch => {
  try {
    const response = await axios.get(
      `http://192.168.13.170:4000/api/dashboard/${category_id}/${user_id}/notes`,
    );

    const data = response.data;

    dispatch({
      type: 'GET_ALL_NOTES',
      data,
    });
  } catch (e) {
    console.log('err', e);

    dispatch({
      type: 'LOADING',
    });
  }
};
