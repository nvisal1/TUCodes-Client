import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';
import Footer from '../components/Footer';
import EmptySurvey from '../components/EmptySurvey';

export default class Survey extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Survey',
    };

    render() {
        return(
            <View style={styles.background}>
                <EmptySurvey></EmptySurvey>
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
})


AppRegistry.registerComponent(Survey, () => Survey)
