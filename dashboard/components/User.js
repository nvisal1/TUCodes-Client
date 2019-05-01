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
        this.state = {
            team: null,
        }
    }

    componentDidMount() {
        this.fetchTeamName();
    }

    render() {
        if (!this.state.team) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        } else {
            return(
                <View style={styles.container}>
                    <Image
                        style={styles.profileImage}
                        source={{uri: this.getGravatarUri()}}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.textContainer__text}>Hi, {this.capitalize(this.props.user.Name)}!</Text>
                        <Text style={styles.textContainer__text}>{this.state.team} {this.props.user.Access}</Text>
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
    }

    fetchTeamName = async () => {
        try {
            let response = await fetch(
              'http://localhost:4000/hippo', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.props.token}`
                },
                body: JSON.stringify({
                    query: `query { BodyComposition (playerId: ${this.props.user.Playerid}) { team }}`
                })
                    
            });
            let responseJson = await response.json();
            console.log(responseJson);
            this.setState({team: responseJson.data.BodyComposition.team})
        } catch (error) {
            console.error(error);
        }
    }


    getGravatarUri = () => {
        const defaultIcon = 'identicon';
        // r=pg checks the rating of the Gravatar image
        return (
            'https://www.gravatar.com/avatar/' +
            md5(this.props.user.Email) +
            '?s=150' +
            '?r=pg&d=' +
            defaultIcon
        );
    }

    capitalize(str){
        const firstName = str.split(' ')[0];
        return firstName.charAt(0).toUpperCase() + firstName.slice(1);
    }

    logout = async() => {
       await AsyncStorage.removeItem('token');
       this.props.navigation.navigate('AuthLoader');
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    profileImage:{
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "white",
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
        padding:10,
        backgroundColor:'#FFBB00',
        borderColor: '#fff',
        width: '100%',
        borderRadius: 5,
    },
  });

AppRegistry.registerComponent(User, () => User)