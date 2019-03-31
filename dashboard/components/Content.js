import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import User from './User';
import Card from './Card';

export default class Content extends Component {

    state = {
        cards: [
           {'name': 'Ben', 'id': 1},
           {'name': 'Susan', 'id': 2},
           {'name': 'Robert', 'id': 3},
           {'name': 'Mary', 'id': 4},
           {'name': 'Daniel', 'id': 5},
           {'name': 'Laura', 'id': 6},
           {'name': 'John', 'id': 7},
           {'name': 'Debra', 'id': 8},
           {'name': 'Aron', 'id': 9},
           {'name': 'Ann', 'id': 10},
           {'name': 'Steve', 'id': 11},
           {'name': 'Olivia', 'id': 12}
        ]
     }

    render() {
        return(
            <View style={styles.container}>
                <User />
                <ScrollView>
                    {
                        this.state.cards.map((index) => (
                            <Card />
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15
    },
})


AppRegistry.registerComponent(Content, () => Content)
