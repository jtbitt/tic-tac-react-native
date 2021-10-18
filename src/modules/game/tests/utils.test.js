import { updateBoxes } from "../utils";
const startingBoxes = Array.from({ length: 9 }, (box, i) => ({
  id: i,
  play: "",
}));

describe("When a play is made", () => {
  it("should update the first box", () => {
    const updatedBox = { id: 0, play: "X" };
    const input = updateBoxes(startingBoxes, updatedBox);
    let output = [...startingBoxes];
    output[0] = updatedBox;

    expect(input[0].id).toEqual(0);
    expect(input[0].play).toEqual("X");
  });
});
