import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    TouchableHighlight,
} from 'react-native';
import Footer from '../components/Footer';
import Content from '../components/Content';
var jwtDecode = require('jwt-decode');

export default class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            token: null,
        };
        this.decodeToken()
            .then(user => this.setState({user}))
    }

    static navigationOptions = {
        title: 'Stats',
    };

    componentDidMount() {
        this.decodeToken()
            .then(user => this.setState({user}));
    }

    render() {
        if (this.state.user) {
            return(
                <View style={styles.background}>
                    <Content 
                        user={this.state.user}
                        token={this.state.token}
                        navigation={this.props.navigation}
                    />
                    <Footer navigation={this.props.navigation}></Footer>
                </View>
                
            );
        } else {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }
    }

    decodeToken = async () => {
        const token = await AsyncStorage.getItem('token')
        this.setState({token});
        const decoded = jwtDecode(token);
        return decoded.user;
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
})


AppRegistry.registerComponent(Stats, () => Stats)