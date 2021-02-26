import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Box } from "../shared/interfaces/box.interface";

interface ISelectionSquareProps {
  id: number;
  turn: string;
  onPress: ({}: Box) => void;
}

export const SelectionSquare = ({
  id,
  turn,
  onPress,
}: ISelectionSquareProps) => {
  const [play, setPlay] = useState("");

  const onSquarePress = () => {
    setPlay(turn);
    onPress({ id: id, play: turn });
  };

  return (
    <TouchableOpacity style={styles.square} onPress={() => onSquarePress()}>
      <Text style={styles.text}>{play}</Text>
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
