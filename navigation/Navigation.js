import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import Login from '../auth/pages/Login';
import Stats from '../dashboard/pages/Stats';
import AuthLoader from '../auth/pages/AuthLoader';
import React from 'react';

const MainNavigator = createStackNavigator({
    Login: {screen: Login},
    Stats: {screen: Stats},
    AuthLoader: {screen: AuthLoader}
  },
  {
    initialRouteName: 'AuthLoader',
});
  
const App = createAppContainer(MainNavigator);

export default App;
