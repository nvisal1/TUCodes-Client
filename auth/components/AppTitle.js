import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class AppTitle extends Component {
    render() {
        return(
            <View>
                <Text style={styles.text}>TIGER</Text>
                <Text style={styles.text}>TRACS</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        color: 'white',
        textAlign: 'center',
        marginTop: 3,
        fontSize: 50,
        fontWeight: 'bold'
    },
  });

AppRegistry.registerComponent(AppTitle, () => AppTitle)