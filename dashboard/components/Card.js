import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
export default class Card extends Component {
    render() {
        switch(this.props.type) {
            case 'bodyCompostion':
                return(
                    <View style={styles.card}>
                        <Text style={styles.card__header}>Your most recent DEXA scan</Text>
                        <View style = {styles.headerLine} />
                        <Text style={styles.card__text}>Total Bone Mass: {this.props.content.totalBoneMass}</Text>
                        <Text style={styles.card__text}>Total Fat Mass: {this.props.content.totalFatMass}</Text>
                        <Text style={styles.card__text}>Total Lean Mass: {this.props.content.totalLeanMass }</Text>
                        <Text style={styles.card__text}>Total Mass: {this.props.content.totalMassKg } </Text>
                        <Text style={styles.card__text}>Total Body Fat Percentage: {this.props.content.totalBodyFatPercentage}</Text>
                    </View>
                );
            case 'fms':
                return(
                    <View style={styles.card}>
                        <Text style={styles.card__header}>Your most recent FMS</Text>
                        <View style = {styles.headerLine} />
                        <Text style={styles.card__text}>In-line Lunge: {this.props.content.inlineLunge}</Text>
                        <Text style={styles.card__text}>Deep Squat: {this.props.content.DeepSquat}</Text>
                        <Text style={styles.card__text}>Hurdle Step: 1</Text>
                        <Text style={styles.card__text}>Active Straight Leg-Raise: {this.props.content.activeStraightLegRaise}</Text>
                        <Text style={styles.card__text}>Shoulder Mobility: {this.props.content.shoulderMobility}</Text>
                        <Text style={styles.card__text}>Rotary Stability: {this.props.content.rotaryStability}</Text>
                        <Text style={styles.card__text}>Trunk Stability Push Up: {this.props.content.pushUp} </Text>
                    </View>
                );
            case 'physiMax':
                return(
                    <View style={styles.card}>
                        <Text style={styles.card__header}>Your most recent PhysiMax</Text>
                        <View style = {styles.headerLine} />
                        <Text style={styles.card__text}>SLS Left Total: 1</Text>
                        <Text style={styles.card__text}>SLS Left Valgus Knee Dgrees: 1</Text>
                        <Text style={styles.card__text}>SLS Left Valgus Error: 1</Text>
                        <Text style={styles.card__text}>SLS Right Total Score: 1</Text>
                        <Text style={styles.card__text}>SLS Right Valgus Knee Degrees: 1</Text>
                        <Text style={styles.card__text}>SLS Right Valgus Error: 1</Text>
                    </View>
                );
        }
        
    }
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerLine:{
        borderWidth: 0.5,
        borderColor: '#FFBB00',
        margin:10,
    },
    card__header: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    card__text: {
        textAlign: 'center',
    },
    card__button:{
        padding:5,
        backgroundColor:'#FFBB00',
        borderColor: '#fff',
        width: '100%'
    },
    button__text:{
        color:'black',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
        fontSize: 18
    }
})


AppRegistry.registerComponent(Card, () => Card)
