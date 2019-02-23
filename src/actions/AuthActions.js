import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOADING,
  USER_ERROR,
  USER_SUCCESS,
} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const userLoading = () => {
  return {
    type: USER_LOADING,
  };
};
export const userError = () => {
  return {
    type: USER_ERROR,
  };
};
export const userSuccess = (dispatch, user) => {
  dispatch({
    type: USER_SUCCESS,
    payload: user,
  });

  Actions.main();
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch(userLoading(true));
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => userSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => userSuccess(dispatch, user))
          .catch(() => dispatch(userError()));
      });
  };
};
