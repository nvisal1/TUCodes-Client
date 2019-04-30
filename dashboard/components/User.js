import React, {Component} from 'react';
import {
    AppRegistry,
    TextInput,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
var md5 = require('md5');

export default class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <Image
                    style={styles.profileImage}
                    source={{uri: this.getGravatarUri()}}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.textContainer__text}>Hi, {this.props.user.Name}</Text>
                    <Text style={styles.textContainer__text}>{this.props.user.Username}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.logout__button}
                        onPress={() => this.logout()}
                        underlayColor='#fff'>
                        <Text style={styles.button__text}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    getGravatarUri = () => {
        const defaultIcon = 'identicon';
        // r=pg checks the rating of the Gravatar image
        return (
            'https://www.gravatar.com/avatar/' +
            md5(this.props.user.Email) +
            '?s=200' +
            '?r=pg&d=' +
            defaultIcon
        );
    }

    logout = async() => {
       await AsyncStorage.removeItem('token');
       this.props.navigation.navigate('AuthLoader');
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row', justifyContent: 'flex-end'
    },
    profileImage:{
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    textContainer: {
        marginLeft: 20,
        marginRight: 20
    },
    textContainer__text: {
        color: 'white',
        fontWeight: 'bold',
        marginRight: 30,
        marginLeft: 20,
    },
    logoImage:{
        height: 50,
        width: 50,
    },
    logout__button:{
        padding:5,
        backgroundColor:'#FFBB00',
        borderColor: '#fff',
        width: '100%'
    },
  });

AppRegistry.registerComponent(User, () => User)