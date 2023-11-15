const ship = require('./index.js');

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