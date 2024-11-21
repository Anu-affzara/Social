import api from '../../utils/api';

export const login = (userData) => async (dispatch) => {
  try {
    const res = await api.post('/auth/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAIL',
      payload: err.response.data.msg,
    });
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    const res = await api.post('/auth/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({
      type: 'REGISTER_FAIL',
      payload: err.response.data.msg,
    });
  }
};

export const fetchUserProfile = (username) => async (dispatch) => {
  try {
    const res = await api.get(`/users/${username}`);
    dispatch({ type: 'GET_PROFILE', payload: res.data });
  } catch (err) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: err.response.data.msg,
    });
  }
};
