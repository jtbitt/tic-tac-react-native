import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class SelectionSquare extends React.Component {
  onSquarePress = () => {
    const { id, onPress } = this.props;

    onPress({id: id, play: turn});
  }

  render() {
    const { turn } = this.props;
    
    return (
      <View style={styles.square}>
        <TouchableOpacity onPress={() => this.onSquarePress()}>
          <Text style={styles.text}>{turn}</Text>
        </TouchableOpacity>
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
