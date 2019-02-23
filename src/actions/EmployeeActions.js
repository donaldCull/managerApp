import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_SAVED,
  EMPLOYEE_FETCH_SUCCESS,
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export const employeeSaved = (dispatch) => {
  dispatch({
    type: EMPLOYEE_SAVED,
  });
  Actions.main();
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    employeeSaved(dispatch);
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        employeeSaved(dispatch);
      });
  };
};

export const fetchEmployees = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
