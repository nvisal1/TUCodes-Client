import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Header from '../components/Header';

export default class Stats extends Component {
    render() {
        return(
            <View style={styles.background}>
                <Content />
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
    },
})


AppRegistry.registerComponent(Stats, () => Stats)