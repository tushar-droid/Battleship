const gameboard = require('./gameboard');

test('check if the Ship was placed properly', () =>{
    const gm = new gameboard();
    gm.placeShips(["2,3","2,4", "2,5", "2,6"]);
    const expectedMap = [
        ["2,3", 'S'],
        ["2,4", 'S'],
        ["2,5", 'S'],
        ["2,6", 'S'],
    ];
    const receivedMap = gm.Board;
    expect(Array.from(receivedMap.entries())).toEqual(expect.arrayContaining(expectedMap));

    // expect(obj.taken_coords).toStrictEqual(["2,3","2,4", "2,5", "2,6"]);
});

