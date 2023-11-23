const Player = require('./player');
const Gameboard = require('./gameboard');
let player_turn = true;


class GameLoop{

    PLAYER_ONE = new Player();
    COMP_PLAYER = new Player();
    PLAYER_BOARD = new Gameboard();
    COMPUTER_BOARD = new Gameboard();

    gameLoop = () =>{
        console.log('Gameloop was started')
        this.placeShipsLoop(this.PLAYER_BOARD)
        this.placeShipsLoop(this.COMPUTER_BOARD)
        console.log(this.PLAYER_BOARD)
        //playGame(PLAYER_ONE, COMP_PLAYER, PLAYER_BOARD, COMPUTER_BOARD);
    }

    playGame = (PLAYER_ONE, COMP_PLAYER, PLAYER_BOARD, COMPUTER_BOARD) =>{
        while(!(PLAYER_BOARD.areAllSunk() || COMPUTER_BOARD.areAllSunk())){
            if(player_turn){
                PLAYER_ONE.yourTurn(COMPUTER_BOARD);
                player_turn = false;
            }
            else{
                COMP_PLAYER.computerTurn(PLAYER_BOARD);
                player_turn = true;
            }
        }
        if(PLAYER_BOARD.areAllSunk())   console.log('COMPUTER WON!!')
        if(COMPUTER_BOARD.areAllSunk())   console.log('YOU WON!!')
    }

    placeShipsLoop = (board_to_set) =>{
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
            const chk =board_to_set.placeShips(String(coord_to_put),Math.random() < 0.5 ? 'H' : 'V', size_array[i] );
            if(chk) i+=1;
        }
    }
    


}








module.exports = GameLoop;
