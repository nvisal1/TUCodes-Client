import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import AppTitle from '../components/AppTitle';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default class Login extends Component {
    render() {
        return(
            <View>
                <AppTitle />
                <FormInput />
                <FormInput />
                <FormButton />
            </View>
        );
    }
}

AppRegistry.registerComponent(Login, () => Login)
