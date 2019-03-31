import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
export default class Footer extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.container__text}>Today's Prepare Score: 69.77%</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        width: '100%',
        padding: 10,
        bottom: 0
    },
    container__text: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 15,
    },
})


AppRegistry.registerComponent(Footer, () => Footer)
