import api from '../../utils/api';

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await api.get('/posts');
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({
      type: 'FETCH_POSTS_FAIL',
      payload: err.response.data.msg,
    });
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const res = await api.post('/posts', postData);
    dispatch({ type: 'CREATE_POST_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({
      type: 'CREATE_POST_FAIL',
      payload: err.response.data.msg,
    });
  }
};
