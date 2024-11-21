const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  profile: null,
  loading: true,
  error: null,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'LOGIN_FAIL':
    case 'REGISTER_FAIL':
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: payload,
      };
    case 'GET_PROFILE':
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case 'PROFILE_ERROR':
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
