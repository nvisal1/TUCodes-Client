
import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    ActivityIndicator,
    StatusBar,
    AsyncStorage,
    StyleSheet,
    Text
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

export default class AuthLoader extends Component {

    constructor(props) {
        super(props);
        this._loadData();
    }

    static navigationOptions = {
        title: 'AuthLoader',
    };

    render() {
        return(
            <View style = {styles.container}>
                <ActivityIndicator
                    color = '#FFBB00'
                    size = "large"
                    style = {styles.activityIndicator}
                />
            </View>
        )
    }

    _loadData = async () => {
        const token = await AsyncStorage.getItem('token');
        if (this.props.survey) {
            this.resetNavigation('Profile')
        } else if (this.props.profile) {
            this.resetNavigation('Survey')
        } else {
            this.resetNavigation(token ? 'Stats' : 'Login');
        }
      
    }

    resetNavigation = async (targetRoute) => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: targetRoute }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        backgroundColor: '#3C3C3C',
        padding: 40,
    },
    text:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    activityIndicator: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       height: 80
    }
 })


AppRegistry.registerComponent(AuthLoader, () => AuthLoader)
