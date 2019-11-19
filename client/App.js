
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/redux/reducer'
import thunk from 'redux-thunk'
import Dashboard from './src/components/Dashboard'
import Login from './src/components/Login'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const store = createStore(reducer, applyMiddleware(thunk))


const navigationStak = createStackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },

}, {
  initialRouteName: 'Login'
})

const Navigation = createAppContainer(navigationStak)

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
