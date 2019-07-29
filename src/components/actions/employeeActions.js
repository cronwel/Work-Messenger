/* eslint-disable prettier/prettier */
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES___FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database()
    .ref(`/users/${currentUser.uid}/employees`)
    .push({name,phone,shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.pop();
    });
  };
};

export const employeeSave = ({name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database()
    .ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({name,phone,shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS});
      Actions.pop();
    });
  };
};

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};



export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database()
    .ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEES___FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const EmplyeeDelete = ({uid}) => {
  const {currentUser } = firebase.auth();
  return () => {
    firebase.database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(()=> {
        Actions.pop();
      });
  };
};
