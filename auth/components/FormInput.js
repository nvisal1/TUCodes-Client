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
        marginBottom: 20
    },
    loginInput:{
        height: 35,
        width: 200,
        backgroundColor: 'white',
        padding: 10,
    }
  });

AppRegistry.registerComponent(FormInput, () => FormInput)