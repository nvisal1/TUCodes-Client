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
        return(
            <View style={styles.card}>
               <Text style={styles.card__header}>DEXA Scan as of 3/10/2019</Text>
               <View style = {styles.headerLine} />
               <Text style={styles.card__text}>Total Bone Mass: </Text>
               <Text style={styles.card__text}>Total Fat Mass: </Text>
               <Text style={styles.card__text}>Total Lean Mass: </Text>
               <Text style={styles.card__text}>Total Mass: </Text>
               <Text style={styles.card__text}>Total Body Fat Percentage: </Text>
               <TouchableOpacity
                    style={styles.card__button}
                    // onPress={() => navigate('HomeScreen')}
                    underlayColor='#fff'>
                    <Text style={styles.button__text}>Details</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: 'white',
        paddingTop: 5
        
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
        fontSize: 20,
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
