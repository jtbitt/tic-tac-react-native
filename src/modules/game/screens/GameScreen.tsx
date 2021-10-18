import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Scoreboard, SelectionSquare, ResetButton } from "../components";
import { Box } from "../interfaces/box.interface";
import { updateBoxes } from "../utils/utils";

const boxArray = Array.from({ length: 9 }, (box, i) => ({ id: i, play: "" }));
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const GameScreen = () => {
  const [xTurn, setTurn] = useState(true);
  const [xScore, setScoreX] = useState(0);
  const [oScore, setScoreO] = useState(0);
  const [boxes, setBoxes] = useState(boxArray);
  const [gameOver, setGameOver] = useState(false);

  const onPlayMade = (updatedBox: Box) => {
    const newBoxes = updateBoxes(boxes, updatedBox);

    setBoxes(newBoxes);
    checkWinner(newBoxes);
  };

  const checkWinner = (newBoxes: Box[]) => {
    const currentPlayer = checkTurn();
    const winner = lines.findIndex(
      (line) =>
        currentPlayer === newBoxes[line[0]].play &&
        currentPlayer === newBoxes[line[1]].play &&
        currentPlayer === newBoxes[line[2]].play
    );
    if (winner !== -1) {
      currentPlayer === "X"
        ? setScoreX(() => xScore + 1)
        : setScoreO(() => oScore + 1);
      setGameOver(true);
    }
    setTurn(!xTurn);
  };

  const checkTurn = () => {
    return xTurn ? "X" : "O";
  };

  const resetGame = () => {
    const newBoxes = [...boxes].map((box, i) => ({ id: i, play: "" }));
    setBoxes(newBoxes);
    setTurn(true);
    setGameOver(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {boxes.map((box, i) => (
          <SelectionSquare
            box={box}
            key={i}
            turn={checkTurn()}
            gameOver={gameOver}
            onPress={onPlayMade}
          />
        ))}
      </View>
      <Scoreboard xScore={xScore} oScore={oScore} />
      <ResetButton onPress={resetGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "15%",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "white",
  },
});
