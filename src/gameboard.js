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

    placeShips = () =>{
        //if needed we can also make the ship object here and then get the coordinates for its placement using obj.taken_coords;
        const new_ship = new Ship(4,'carrier', '0,0','V');
        const coordinates = new_ship.taken_coords;
        coordinates.forEach(coord =>{
            this.Board.set(coord, new_ship);
        });
    }

    receiveAttack = (hit_coordinates_string) =>{
        //will recieve the attacks and decide if the ship is hit or not
        // const hit_coordinates_arr = hit_coordinates_string.split(',');    //I am assuming the coordinates come as string like "2,3" or else we can use this
        // X_coordinates = hit_coordinates_arr[0];
        // Y_coordinates = hit_coordinates_arr[1];
        
        if(this.Board.get(hit_coordinates_string) instanceof Object){
            //it is a hit
            //call hit function in ship;
            const hit_ship = this.Board.get(hit_coordinates_string);
            hit_ship.hit();
            //check if the ship is sunk
            this.Board.set(hit_coordinates_string, 'H');    
            //check if all ships sunk        
            
            this.areAllSunk();
            
            //start here


        }
        else{
            //It hit the water so change it to a hit to make sure it is not hittable again
            this.Board.set(hit_coordinates_string, 'H'); 
        }
    }

    areAllSunk = () =>{

        //todo


    }

}
const gm = new Gameboard();


module.exports = Gameboard;