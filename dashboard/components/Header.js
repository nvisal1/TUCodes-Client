import React, {Component} from 'react';
import {
    AppRegistry,
    TextInput,
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

export default class Header extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image
                    style={styles.profileImage}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.textContainer__text}>Hi, Doc!</Text>
                    <Text style={styles.textContainer__text}>#75 Towson Football</Text>
                </View>
            </View>
        );
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
        borderRadius: 50,
    },
    textContainer: {
        marginLeft: 20,
        marginRight: 20
    },
    textContainer__text: {
        color: 'white',
        fontWeight: 'bold'
    },
    logoImage:{
        height: 50,
        width: 50,
    },
  });

AppRegistry.registerComponent(Header, () => Header)