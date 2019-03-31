import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';
import User from './User';
import Card from './Card';

export default class Header extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.container__text}>TIGER TRACS</Text>
                <View style = {styles.headerLine} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    container__text: {
        color: 'white'
    },
    headerLine:{
        borderWidth: 1,
        borderColor: '#FFBB00',
        margin: 10,
    },
})


AppRegistry.registerComponent(Header, () => Header)