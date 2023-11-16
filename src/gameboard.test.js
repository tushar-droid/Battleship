const gameboard = require('./gameboard');

test('check if the Ship was placed properly', () =>{
    const gm = new gameboard();
    gm.placeShips();
    const key_arr = ["0,1","0,2","0,3","0,0"];
    const receivedMap = gm.Board;
    expect(receivedMap.get(key_arr[0])).toBeInstanceOf(Object);
    expect(receivedMap.get(key_arr[1])).toBeInstanceOf(Object);
    expect(receivedMap.get(key_arr[2])).toBeInstanceOf(Object);
    expect(receivedMap.get(key_arr[3])).toBeInstanceOf(Object);
    //expect(Array.from(receivedMap.entries())).toEqual(expect.arrayContaining(expectedMap));

    // expect(obj.taken_coords).toStrictEqual(["2,3","2,4", "2,5", "2,6"]);
});

