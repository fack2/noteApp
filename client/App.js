import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/redux/reducer';
import thunk from 'redux-thunk';
import Dashboard from './src/components/Dashboard';

import NoteList from './src/components/NoteList';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {View, StyleSheet, Text} from 'react-native';

const navigationStak = createStackNavigator({
  Dashboard: {screen: Dashboard},
  NoteList: {screen: NoteList},
});

const store = createStore(reducer, applyMiddleware(thunk));
const Navigation = createAppContainer(navigationStak);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const styles = StyleSheet.create({
  // styles
});

export default App;
