import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Scoreboard, SelectionSquare } from "./components";
import { Box } from "./shared/interfaces/box.interface";

// // 1. atomic operations, small
// const Dialog = () => {
//   const [isOpen, setIsOpen] = useState(false);
// }
// // 2. when it grows, we usually introduce useReducer(...)
// // more complex state management
// // 3. When it comes to API calls https://bigsondev.com/blog/how-to-fetch-data-in-react-using-pokeapi/
// // react-query library
// const {error, isLoading, data } = useQuery(fetch/axios);
// const {error, isLoading, data } = useFetch() // custom hook

// I love unit testing business logic  -> jest, mapBoxes(...), mapBoxes(...)
// I do e2e -> Cypress, critical path testing
// ^ integration testing
// A/B testing -> LaunchDarkly, Google Optimize
// Screen recording with e.g. HotJar

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

export default function App() {
  const [xTurn, setTurn] = useState(true);
  const [xScore, setScoreX] = useState(0);
  const [oScore, setScoreO] = useState(0);
  const [boxes, setBoxes] = useState(boxArray);

  const onPlayMade = (updatedBox: Box) => {
    const newBoxes = [...boxes].map((box) => {
      if (updatedBox.id === box.id) {
        return {
          ...box,
          play: updatedBox.play,
        };
      }
      return box;
    });

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
    }
    setTurn(!xTurn);
  };

  const checkTurn = () => {
    return xTurn ? "X" : "O";
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Tic Tac</Text>
      </View>
      <View style={styles.board}>
        {boxes.map((box, i) => (
          <SelectionSquare
            id={box.id}
            key={i}
            turn={checkTurn()}
            onPress={onPlayMade}
          />
        ))}
      </View>
      <Scoreboard xScore={xScore} oScore={oScore} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "15%",
  },
  title: {
    color: "white",
    fontSize: 40,
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "white",
  },
});
