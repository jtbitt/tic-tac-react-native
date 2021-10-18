import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface IScoreboardProps {
  xScore: number;
  oScore: number;
}

export const Scoreboard = ({ xScore, oScore }: IScoreboardProps) => {
  return (
    <View style={styles.scoreBoard}>
      <View style={styles.scoreBox}>
        <Text style={styles.score}>Jay</Text>
        <Text style={styles.score}>{xScore}</Text>
      </View>
      <View style={styles.scoreBox}>
        <Text style={styles.score}>Player 2</Text>
        <Text style={styles.score}>{oScore}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreBoard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scoreBox: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  score: {
    fontSize: 30,
    color: "white",
  },
});
