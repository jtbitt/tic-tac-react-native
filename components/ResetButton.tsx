import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IResetButtonProps {
  onPress: () => void;
}

export const ResetButton = ({ onPress }: IResetButtonProps) => {
  const onResetPress = () => {
    onPress();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={() => onResetPress()}>
      <Text style={styles.text}>Reset</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});
