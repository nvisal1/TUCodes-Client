import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default class Stats extends Component {
    render() {
        return(
            <View style={styles.background}>
                <Header />
                <Card />
                <Footer />
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
        padding: 15
    },
})


AppRegistry.registerComponent(Stats, () => Stats)