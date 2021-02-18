import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SelectionSquare from './components/SelectionSquare';
import Scoreboard from './components/Scoreboard';

import { fetchTicTacBoxes } from './utils/api';

export default class App extends React.Component {
  state = {
    xTurn: true,
    score1: 33,
    score2: 0,
    boxes: []
  };

  async componentDidMount() {
    const boxes = await fetchTicTacBoxes();
    this.setState({ boxes });
  }

  onPlayMade = updatedBox => {
    const { boxes } = this.state;
    const newBoxes = [...this.state.boxes];
    newBoxes[updatedBox.id]['play'] = updatedBox.play;

    this.setState({ boxes: newBoxes });

    console.log(updatedBox);
  }

  checkWinner = () => {

  }

  checkTurn = () => {
    const { xTurn } = this.state;

    return xTurn ? 'X' : 'O';
  }

  render () {
    const { xTurn, boxes, score1, score2 } = this.state;

    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Tic Tac</Text>
        </View>
        <View style={styles.board}>
          {boxes.map((box, key) => <SelectionSquare id={box.id} key={key} turn={this.checkTurn()} onPress={this.onPlayMade} />)}
        </View>
        <Scoreboard score1={score1} score2={score2} />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '15%'
  },
  title: {
    color: 'white',
    fontSize: 40
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'white',
  },
});
