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
            <View>
                <TextInput style={styles.loginText} placeholder='username'></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginScreenButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
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
          paddingRight : 10
      }
  });

AppRegistry.registerComponent(FormInput, () => FormInput)