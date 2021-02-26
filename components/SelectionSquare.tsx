import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Box } from "../shared/interfaces/box.interface";

interface ISelectionSquareProps {
  box: Box;
  turn: string;
  gameOver: boolean;
  onPress: ({}: Box) => void;
}

export const SelectionSquare = ({
  box,
  turn,
  gameOver,
  onPress,
}: ISelectionSquareProps) => {
  const onSquarePress = () => {
    if (!box.play.length && !gameOver) {
      onPress({ id: box.id, play: turn });
    }
  };

  return (
    <TouchableOpacity style={styles.square} onPress={() => onSquarePress()}>
      <Text style={styles.text}>{box.play}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: "33%",
    height: 100,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 60,
  },
});
