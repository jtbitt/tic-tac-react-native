import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SelectionSquare from './components/SelectionSquare';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <SelectionSquare />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    borderWidth: 1,
    borderColor: 'white'
  }
});
