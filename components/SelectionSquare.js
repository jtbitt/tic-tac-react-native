import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SelectionSquare extends React.Component {
    render() {
        return (
            <View style={styles.square}>
                <Text style={styles.text}>X</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    square: {
        padding: 30
    },
    text: {
      color: 'white',
      fontSize: 50
    }
});