/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MoviesList from './src/MoviesList';
import ApiHandler from './src/ApiHandler';

function App(): JSX.Element {

  return (
    <View style={{ flex: 1 }}>
      <ApiHandler/>
    </View>
  );

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
