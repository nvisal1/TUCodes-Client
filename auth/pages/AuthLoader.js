
import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    ActivityIndicator,
    StatusBar,
    AsyncStorage
} from 'react-native';

export default class AuthLoader extends Component {

    constructor(props) {
        super(props);
        this._loadData();
    }

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
        this.props.navigation.navigate(token ? 'Stats' : 'Login');
    }
}


AppRegistry.registerComponent(AuthLoader, () => AuthLoader)
