
import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    ActivityIndicator,
    StatusBar,
    AsyncStorage
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

export default class AuthLoader extends Component {

    constructor(props) {
        super(props);
        this._loadData();
    }

    static navigationOptions = {
        title: 'AuthLoader',
    };

    render() {
        return(
            <View>
                <ActivityIndicator />
                <StatusBar />
            </View>
        )
    }

    _loadData = async () => {
        const token = await AsyncStorage.getItem('token');
        this.resetNavigation(token ? 'Stats' : 'Login');
    }

    resetNavigation = async (targetRoute) => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: targetRoute }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
    }
}


AppRegistry.registerComponent(AuthLoader, () => AuthLoader)
