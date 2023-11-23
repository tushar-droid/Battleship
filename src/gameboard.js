const Ship = require('./ship');
// const prompt = require("prompt-sync")({ sigint: true });
/// coordinates willl be as follows: 
/// (0,0) corresponds to the bottom left corner
/// first element tells the X position and second element tells the Y position

class Gameboard{
    Board = new Map();
    isGameOver = false;
    constructor(){
        for(var i = 0; i<10; i++){
            for(var j = 0; j<10; j++){
                this.Board.set(`${i},${j}`, 'W')
            }
        }
    };

    placeShips = (coords = '0,0', orientations = 'V',size) =>{
        //if needed we can also make the ship object here and then get the coordinates for its placement using obj.taken_coords;
        const requested_coords = [];
        const coords_arr = coords.split(',');
        const X_val = parseInt(coords_arr[0]);
        const Y_val = parseInt(coords_arr[1]); 
        if(orientations ==='H'){
            requested_coords.push(`${X_val-1},${Y_val}`);
            requested_coords.push(`${X_val+size},${Y_val}`)
        }
        else if(orientations ==='V'){
            requested_coords.push(`${X_val},${Y_val-1}`);
            requested_coords.push(`${X_val},${Y_val+size}`)
        }
        for(let i =0; i<size;i++){
            if(orientations ==='H')
            {   requested_coords.push(`${X_val+i},${Y_val}`)
                requested_coords.push(`${X_val+i},${Y_val-1}`)
                requested_coords.push(`${X_val+i},${Y_val+1}`)
                }
            else    
            {   requested_coords.push(`${X_val},${Y_val+i}`)
                requested_coords.push(`${X_val-1},${Y_val+i}`)
                requested_coords.push(`${X_val+1},${Y_val+i}`)             
            }
        }
        
        //This flag makes sure requested coordinates are available
        //And provides proper spacing to make sure Ships are not crowded together
        let flag = true
        //Checks the requested coordinates
        requested_coords.forEach(coord => {
            if( this.Board.get(coord) instanceof Object)
                {       flag = false
                }
        });

        //check the flag before creating ship
        if(!flag)   return false;
        
        
        //check expected coordinates to make sure the ships won't overlap
        const new_ship = new Ship(size,`carrier ${size} ${orientations}`, coords,orientations);
        const coordinates = new_ship.taken_coords;
        coordinates.forEach(coord =>{
            if(!(this.Board.get(coord) instanceof Object)){
                this.Board.set(coord, new_ship);
            }
            else return false;
        });

        return true;
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
        var flag = true;
        const values = [...this.Board.values()];
        values.forEach(val =>{
            if( val instanceof Object){
                flag = false;
            }
        })
        this.isGameOver = true;
        return flag;
    }
}
//const gm = new Gameboard();


module.exports = Gameboard;
