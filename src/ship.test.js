const ship = require('./ship');

test('check hit counter to be 0', () =>{
    const obj = new ship();
    expect(obj.hitCount).toBe(0);
})
test('check length', () =>{
    const obj = new ship(4, 'carrier');
    expect(obj.length).toBe(4);
})
test('check name', () =>{
    const obj = new ship(4, 'carrier');
    expect(obj.name).toBe('carrier');
})
test('check hit counter increment', () =>{
    const obj = new ship(4, 'carrier');
    obj.hit();
    expect(obj.hitCount).toBe(1);
})

test('check isSunk', () =>{
    const obj = new ship(4, 'carrier');
    expect(obj.isSunk()).toBe(false);
})
test('check isSunk after multiple hits', () =>{
    const obj = new ship(2, 'carrier');
    obj.hit();
    obj.hit();
    expect(obj.isSunk()).toBe(true);
})

test('check the postion coordinates', () =>{
    const obj = new ship(2, 'carrier', "2,3", "H");
    expect(obj.taken_coords).toStrictEqual(["2,3", "3,3"]);
})

test('check the postion coordinates for different length', () =>{
    const obj = new ship(4, 'carrier', "2,3", "H");
    expect(obj.taken_coords).toStrictEqual(["2,3", "3,3", "4,3", "5,3"]);
})

test('check the postion coordinates for vertical ship', () =>{
    const obj = new ship(2, 'carrier', "2,3", "V");
    expect(obj.taken_coords).toStrictEqual(["2,3","2,4"]);
})

test('check the postion coordinates when placing out of bounds Horizontally', () =>{
    const obj = new ship(4, 'carrier', "7,3", "H");
    expect(obj.taken_coords).toStrictEqual([]);
})

test('check the postion coordinates when placing out of bounds Vertically', () =>{
    const obj = new ship(4, 'carrier', "2,8", "V");
    expect(obj.taken_coords).toStrictEqual([]);
})
