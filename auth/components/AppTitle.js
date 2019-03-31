import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class AppTitle extends Component {
    render() {
        return(
            <View>
                <Text>Tiger</Text>
                <Text>TRACS</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent(AppTitle, () => AppTitle)