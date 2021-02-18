import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class SelectionSquare extends React.Component {
  state = {
    play: ''
  };

  onSquarePress = () => {
    const { id, turn, onPress } = this.props;

    this.setState({ play: turn.toUpperCase() });
    onPress({id: id, play: turn});
  }

  render() {
    const { play } = this.state;
    
    return (
      <TouchableOpacity style={styles.square} onPress={() => this.onSquarePress()}>
        <Text style={styles.text}>{play}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  square: {  
    width: '33%',
    height: 100,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 60
  }
});
