const Player = require('./player');
const Gameboard = require('./gameboard');
let player_turn = true;


const gameLoop = () =>{
    const PLAYER_ONE = new Player();
    const COMP_PLAYER = new Player();
    const PLAYER_BOARD = new Gameboard();
    const COMPUTER_BOARD = new Gameboard();
    placeShipsLoop(PLAYER_BOARD);
    placeShipsLoop(COMPUTER_BOARD);
    while(!(PLAYER_BOARD.areAllSunk() || COMPUTER_BOARD.areAllSunk())){
        if(player_turn){
            PLAYER_ONE.yourTurn(COMPUTER_BOARD);
        }
        else{
            COMP_PLAYER.computerTurn(PLAYER_BOARD);
        }
    }
}


const placeShipsLoop = (board_to_set) =>{
    let i = 0;
    let size_array = [2,3,4,4];
    var possible_places = 
    [
        '0,0', '0,1', '0,2', '0,3', '0,4', '0,5',
        '0,6', '1,0', '1,1', '1,2', '1,3', '1,4',
        '1,5', '1,6', '2,0', '2,1', '2,2', '2,3',
        '2,4', '2,5', '2,6', '3,0', '3,1', '3,2',
        '3,3', '3,4', '3,5', '3,6', '4,0', '4,1',
        '4,2', '4,3', '4,4', '4,5', '4,6', '5,0',
        '5,1', '5,2', '5,3', '5,4', '5,5', '5,6',
        '6,0', '6,1', '6,2', '6,3', '6,4', '6,5',
        '6,6'
    ]
      
    while(i<4){
        var coord_to_put = Math.floor(Math.random() * possible_places.length);
        coord_to_put = possible_places.splice(coord_to_put, 1);
        if(board_to_set.placeShips(size_array[i],'boat',coord_to_put,Math.random() < 0.5 ? 'H' : 'V' )) i+=1;
    }
}

