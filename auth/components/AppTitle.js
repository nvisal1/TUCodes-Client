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
            <View style={styles.container}>
                <Text style={styles.text}>TIGER</Text>
                <Text style={styles.text}>TRACS</Text>
                <Text style={styles.release}>ALPHA</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    text:{
        color: 'white',
        textAlign: 'center',
        marginTop: 3,
        fontSize: 50,
        fontWeight: 'bold'
    },
    release: {
        color: 'red',
        textAlign: 'right',
        marginTop: 3,
        fontSize: 15,
        fontWeight: 'bold'
    }
  });

AppRegistry.registerComponent(AppTitle, () => AppTitle)