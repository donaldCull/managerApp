import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
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
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
