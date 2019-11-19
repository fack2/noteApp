/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './redux/reducer'
import Login from './src/components/Login'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const store = createStore(reducer, applyMiddleware(thunk))

const navigationStak = createStackNavigator({
  Login: { screen: Login },
})

let Navigation = createAppContainer(navigationStak);



const App: () => React$Node = () => {
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
