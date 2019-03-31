/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
  
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Login from './auth/pages/Login';
import Stats from './dashboard/pages/Stats';
import AuthLoader from './auth/pages/AuthLoader';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Stats: {screen: Stats},
  AuthLoader: {screen: AuthLoader}
},
{
  initialRouteName: 'AuthLoader'
});

const App = createAppContainer(MainNavigator);

export default App;
