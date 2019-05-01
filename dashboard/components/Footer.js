import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    TouchableHighlight
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class Footer extends Component {
    
    render() {
        return(
            <View style={styles.footer}>
                <TouchableHighlight style={styles.bottomButtons}>
                    <FontAwesome name='envelope' color="white" style={{ fontSize: 25 }} onPress={() => this.props.navigation.navigate('Survey')}/>
                </TouchableHighlight>
                <TouchableHighlight style={styles.bottomButtons}>
                    <FontAwesome name='archive' color="white" style={{ fontSize: 25 }} onPress={() => this.props.navigation.navigate('AuthLoader')}/>
                </TouchableHighlight>
                <TouchableHighlight style={styles.bottomButtons}>
                    <FontAwesome name='user' color="white" style={{ fontSize: 25 }} onPress={() => this.props.navigation.navigate('Profile')}/>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor:'#FFBB00',
        flexDirection:'row',
        height:80,
        alignItems:'center',
    },
    bottomButtons: {
        alignItems:'center',
        justifyContent: 'center',
        flex:1,
    },
    footerText: {
        color:'white',
        fontWeight:'bold',
        alignItems:'center',
        fontSize:18,
    },
})


AppRegistry.registerComponent(Footer, () => Footer)
