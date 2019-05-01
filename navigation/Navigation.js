import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import Login from '../auth/pages/Login';
import Stats from '../dashboard/pages/Stats';
import Survey from '../dashboard/pages/Survey';
import Profile from '../dashboard/pages/Profile';
import AuthLoader from '../auth/pages/AuthLoader';


const MainNavigator = createStackNavigator({
    Login: {screen: Login},
    Stats: {screen: Stats},
    Survey: {screen: Survey},
    Profile: {screen: Profile},
    AuthLoader: {screen: AuthLoader}
  },
  {
    initialRouteName: 'AuthLoader',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
});
  
const App = createAppContainer(MainNavigator);

export default App;
