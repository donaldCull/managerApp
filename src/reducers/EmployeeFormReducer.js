import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_SAVED,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  created: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_SAVED:
      return INITIAL_STATE;
    default:
      return state;
  }
}