import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class EmptySurvey extends Component {
    
    render() {
        return(
            <View style={styles.container}>
                <FontAwesome name='envelope' color="white" style={{ fontSize: 100 }}/>
                <Text style={styles.text}>Aw, you have no surveys</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        height:"100%",
        alignItems:'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginTop: 3,
        fontSize: 20,
        fontWeight: 'bold'
    }
})


AppRegistry.registerComponent(EmptySurvey, () => EmptySurvey)
