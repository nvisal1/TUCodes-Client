import Navigation from './navigation/Navigation';
import { View } from 'react-native';
import React from 'react';

export default class App extends React.Component {
    
  render() {
    return (
      <View>
        <Navigation />
      </View>
    );
  }
}