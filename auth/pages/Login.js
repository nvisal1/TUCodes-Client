import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
    AsyncStorage
} from 'react-native';
import AppTitle from '../components/AppTitle';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        return(
            <View style={styles.background}>
                <AppTitle />
                <TextInput 
                    style={styles.loginInput}
                    placeholder='username'
                    onChangeText={(username)=>this.setState({username})}
                    value={this.state.username}
                ></TextInput>
                <TextInput 
                    style={styles.loginInput}
                    placeholder='password'
                    onChangeText={(password)=>this.setState({password})}
                    value={this.state.password}
                    secureTextEntry={true}
                ></TextInput>
                <FormButton
                    navigation={this.props.navigation} 
                    action={this.signIn}
                />
            </View>
        );
    }

    signIn = async () => {
        // Make request for token
        const token = null;
        if (!token) {
            alert('Username or Password is wrong');
        } else {
            await AsyncStorage.setItem('token', token);
            this.props.navigation.navigate('Stats');
            
        }
  
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
    loginInput:{
        height: 35,
        width: 200,
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 20
    }
})


AppRegistry.registerComponent(Login, () => Login)
