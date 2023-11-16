const Ship = require('./ship');


/// coordinates willl be as follows: 
/// (0,0) corresponds to the bottom left corner
/// first element tells the X position and second element tells the Y position

class Gameboard{
    Board = new Map(); 
    constructor(){
        for(var i = 0; i<10; i++){
            for(var j = 0; j<10; j++){
                this.Board.set(`${i},${j}`, 'W')
            }
        }
    };

    placeShips = (coordinates = ["2,3","2,4", "2,5", "2,6"]) =>{
        //if needed we can also make the ship object here and then get the coordinates for its placement using obj.taken_coords;
        coordinates.forEach(coord =>{
            this.Board.set(coord, 'S');
        });
    }

    receiveAttack = () =>{
        //will recieve the attacks and decide if the ship is hit or not
    }

    areAllSunk = () =>{

    }

}
const gm = new Gameboard();


module.exports = Gameboard;