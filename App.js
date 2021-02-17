import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SelectionSquare from './components/SelectionSquare';

export default class App extends React.Component {
  state = {
    playerTurn: 1,
    playerOneScore: 0,
    playerTwoScore: 0,
  };

  render () {
    return(
      <View style={styles.container}>
        <View style={styles.board}>
          {[0,1,2,3,4,5,6,7,8].map(() => <SelectionSquare />)}
        </View>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    marginLeft: '15%',
    marginRight: '15%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'white',
  },
});
