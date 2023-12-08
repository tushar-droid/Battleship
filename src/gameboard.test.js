const gameboard = require("./gameboard");

test("check if the Ship was placed properly", () => {
  const gm = new gameboard();
  gm.placeShips();
  const key_arr = ["0,1", "0,2", "0,3", "0,0"];
  const receivedMap = gm.Board;
  expect(receivedMap.get(key_arr[0])).toBeInstanceOf(Object);
  expect(receivedMap.get(key_arr[1])).toBeInstanceOf(Object);
  expect(receivedMap.get(key_arr[2])).toBeInstanceOf(Object);
  expect(receivedMap.get(key_arr[3])).toBeInstanceOf(Object);
});

test("check if all sunk (False) ", () => {
  const gm = new gameboard();
  gm.placeShips();
  expect(gm.areAllSunk()).not.toBeTruthy();
});

test("check if all sunk (True) ", () => {
  const gm = new gameboard();
  gm.placeShips();
  gm.receiveAttack("0,1");
  gm.receiveAttack("0,2");
  gm.receiveAttack("0,3");
  gm.receiveAttack("0,0");
  expect(gm.areAllSunk()).toBeTruthy();
});

test("check if all sunk (False) ", () => {
  const gm = new gameboard();
  gm.placeShips();
  gm.receiveAttack("0,9");
  gm.receiveAttack("0,2");
  gm.receiveAttack("0,3");
  gm.receiveAttack("0,0");
  expect(gm.areAllSunk()).not.toBeTruthy();
});
