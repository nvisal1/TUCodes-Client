import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import AppTitle from '../components/AppTitle';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        return(
            <View style={styles.background}>
                <AppTitle />
                <FormInput />
                <FormInput />
                <FormButton navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
})


AppRegistry.registerComponent(Login, () => Login)
