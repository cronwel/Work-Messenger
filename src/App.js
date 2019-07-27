/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './components/Router';

class App extends Component{
  UNSAFE_componentWillMount(){
    const firebaseConfig = {
      apiKey: 'AIzaSyB68sT_toeztH3Dw9eB2TjLRT_kvp8vz1A',
      authDomain: 'worklog-78424.firebaseapp.com',
      databaseURL: 'https://worklog-78424.firebaseio.com',
      projectId: 'worklog-78424',
      storageBucket: '',
      messagingSenderId: '623425617942',
      appId: '1:623425617942:web:e5e92c866908d159',
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
