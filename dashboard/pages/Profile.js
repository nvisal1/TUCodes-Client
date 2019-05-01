import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';
import Footer from '../components/Footer';

export default class Profile extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        return(
            <View style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.text}>Coming soon!</Text>
                </View>
                <Footer navigation={this.props.navigation}></Footer>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
        backgroundColor: '#3C3C3C',
        justifyContent: 'center',
        alignItems: 'center',
    },
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


AppRegistry.registerComponent(Profile, () => Profile)
