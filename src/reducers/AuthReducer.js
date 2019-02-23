import {
  EMAIL_CHANGED, PASSWORD_CHANGED, USER_ERROR, USER_SUCCESS, USER_LOADING,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case USER_LOADING:
      return { ...state, loading: true, error: '' };
    case USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case USER_ERROR:
      return { ...state, error: 'Authentication Failed.', loading: false };
    default:
      return state;
  }
};
