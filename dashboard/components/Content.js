import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';
import User from './User';
import Card from './Card';

export default class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bodyComposition: null,
            fms: null,
            physiMax: null,
        }
    }

    componentDidMount() {
        this.fetchRecentBodyComposition();
        this.fetchRecentFms();
    }

    fetchRecentBodyComposition = async () => {
        try {
            let response = await fetch(
              'http://localhost:4000/hippo', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.props.token}`
                },
                body: JSON.stringify({
                    query: `query { BodyComposition (playerId: ${this.props.user.Playerid}) { team sex height totalBoneMass totalFatMass totalLeanMass totalBoneMassKg totalFatMassKg totalLeanMassKg totalMassKg totalBodyFatPercentage}}`
                })
                    
            });
            let responseJson = await response.json();
            console.log(responseJson)
            this.setState({bodyComposition: responseJson.data.BodyComposition})
        } catch (error) {
            console.error(error);
        }
    }

    fetchRecentFms = async () => {
        try {
            let response = await fetch(
              'http://localhost:4000/hippo', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.props.token}`
                },
                body: JSON.stringify({
                    query: `query { FMS (playerId: ${this.props.user.Playerid}) { shoulderMobility DeepSquat HurdleStep inlineLunge activeStraightLegRaise pushUp rotaryStability total}}`
                })
                    
            });
            let responseJson = await response.json();
            console.log(responseJson);
            this.setState({fms: responseJson.data.FMS})
        } catch (error) {
            console.error(error);
        }
    }



    render() {
        if (!this.state.bodyComposition || !this.state.fms) {
            return(
                <View>
                    <Text>Loading...</Text>
                </View>  
            )
        } else {

        }
        return(
            <View style={styles.container}>
                <User 
                    user={this.props.user}
                    navigation={this.props.navigation}
                    token={this.props.token}
                />
                <View style={{height: '85%'}} >
                    <ScrollView>
                        {
                            <View>
                                <Card 
                                    type="bodyCompostion"
                                    content={this.state.bodyComposition}
                                />
                                <Card 
                                    type="fms"
                                    content={this.state.fms}
                                />
                                <Card type="physiMax"/>
                            </View>
                        }
                    </ScrollView>
                </View>
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


AppRegistry.registerComponent(Content, () => Content)
