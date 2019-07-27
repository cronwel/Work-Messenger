/* eslint-disable prettier/prettier */
import {
  EMPLOYEES___FETCH_SUCCESS,
} from '../components/actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case EMPLOYEES___FETCH_SUCCESS:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};
