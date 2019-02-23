import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCM9d5aYpA3aXmdcO9xDi9fr5mRyBUDrks',
      authDomain: 'manager-569a3.firebaseapp.com',
      databaseURL: 'https://manager-569a3.firebaseio.com',
      projectId: 'manager-569a3',
      storageBucket: 'manager-569a3.appspot.com',
      messagingSenderId: '409702866260',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
