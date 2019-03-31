import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

export default class FormButton extends Component {
    
    render() {
        return(
            <View>
                <TouchableOpacity
                    style={styles.loginScreenButton}
                    // onPress={() => navigate('HomeScreen')}
                    underlayColor='#fff'>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginScreenButton:{
        marginRight:40,
        marginLeft:40,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#FFBB00',
        borderColor: '#fff',
        width: 100
    },
    loginText:{
        color:'black',
        textAlign:'center',
        fontWeight: 'bold',
        paddingLeft : 10,
        paddingRight : 10,
        fontSize: 18
    }
  });
  

AppRegistry.registerComponent(FormButton, () => FormButton)