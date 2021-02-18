import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SelectionSquare extends React.Component {
  onAnswerPress = answerCorrect => {
    const { onPress } = this.props;

    answerCorrect ? onPress(true) : onPress(false);
  }

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
    width: '30%',
    padding: 30
  },
  text: {
    color: 'white',
    fontSize: 50
  }
});
