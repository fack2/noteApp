/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducer'

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

const store = createStore(reducer)

const App: () => React$Node = () => {
  return (

    <Provider store={store}>
      <SafeAreaView>
        {/* //tags */}
        <Text>HI</Text>
      </SafeAreaView>
    </Provider>

  );
};

const styles = StyleSheet.create({
  // styles
});

export default App;
