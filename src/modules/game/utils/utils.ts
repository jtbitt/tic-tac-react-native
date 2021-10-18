import { Box } from "../interfaces/box.interface";

export const updateBoxes = (boxes: Box[], updatedBox: Box) => {
  return [...boxes].map((box: Box) => {
    if (updatedBox.id === box.id) {
      return {
        ...box,
        play: updatedBox.play,
      };
    }
    return box;
  });
};
