const player = require("./player");
const gameboard = require("./gameboard");
test("check if player attack works ", () => {
  const player_gm = new gameboard();
  const comp_gm = new gameboard();
  player_gm.placeShips();
  comp_gm.placeShips();
  const pl = new player();
  const comp = new player();
  pl.yourTurn(comp_gm);
  expect(comp_gm.Board.get("1,9")).toBe("H");
});

test("check if computer attack works ", () => {
  const player_gm = new gameboard();
  const comp_gm = new gameboard();
  player_gm.placeShips();
  comp_gm.placeShips();
  const pl = new player();
  const comp = new player();
  comp.computerTurn(player_gm);
  expect(player_gm.Board.get("4,8")).toBe("H");
});
