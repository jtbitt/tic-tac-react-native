import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Scoreboard ({
  score1,
  score2
}) {
  return (
    <View style={styles.scoreBoard}>
      <View style={styles.scoreBox}>
        <Text style={styles.score}>Jay</Text>
        <Text style={styles.score}>{score1}</Text>
      </View>
      <View style={styles.scoreBox}>
        <Text style={styles.score}>Player 2</Text>
        <Text style={styles.score}>{score2}</Text>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  scoreBoard: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  scoreBox: {
    padding: 40
  },
  score: {
    fontSize: 30,
    color: 'white'
  }
});
