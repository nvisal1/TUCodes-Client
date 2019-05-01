import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
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
            <View style={styles.container}>
                <User></User>
                <Footer navigation={this.props.navigation}></Footer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 30,
        alignContent: "center"
    },
})


AppRegistry.registerComponent(Profile, () => Profile)
