/* eslint-disable prettier/prettier */
import {
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE,
  EMPLOYEE_SAVE_SUCCESS,
} from '../components/actions/types';

const INITIAL_STATE = {
  name: '',
  phone:'',
  shift:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};


// [action.payload.prop]: in L15 is key interpolation
