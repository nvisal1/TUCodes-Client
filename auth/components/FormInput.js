import React, {Component} from 'react';
import {
    AppRegistry,
    TextInput,
    StyleSheet,
    View
} from 'react-native';

export default class FormInput extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.loginInput} placeholder='username'></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    loginInput:{
        height: 40,
        width: 200,
        backgroundColor: 'white'
    }
  });

AppRegistry.registerComponent(FormInput, () => FormInput)