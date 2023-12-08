const Player = require("./player");
const Gameboard = require("./gameboard");
const GameOver = require("./GameOver");
class GameLoop {
  player_turn = true;
  PLAYER_ONE = new Player();
  COMP_PLAYER = new Player();
  PLAYER_BOARD = new Gameboard();
  COMPUTER_BOARD = new Gameboard();
  gameLoop = (player_ship_placements) => {
    this.placeShipsLoop(this.PLAYER_BOARD, player_ship_placements);
    this.placeShipsLoop(this.COMPUTER_BOARD);
    //playGame(PLAYER_ONE, COMP_PLAYER, PLAYER_BOARD, COMPUTER_BOARD);
  };

  playGame = () => {
    const computer_grid_click_handler = document.querySelector(".comp-grid");
    computer_grid_click_handler.addEventListener("click", (e) => {
      let attack_on = e.target.getAttribute("coords");

      if (attack_on && this.COMPUTER_BOARD.Board.get(attack_on) !== "H") {
        const elem = document.getElementById(`C${attack_on}`);
        if (this.PLAYER_ONE.yourTurn(this.COMPUTER_BOARD, attack_on, elem)) {
          GameOver("CONGRATULATIONS YOU WON!!!!!");
          return;
          //window.alert('CONGRATULATIONS YOU WON!!!!!')
        }
        if (this.COMP_PLAYER.computerTurn(this.PLAYER_BOARD)) {
          GameOver("WELL PLAYED BUT COMPUTER WON!!!!!");
          return;
        }
      }
    });

    // computer_grid_click_handler.addEventListener('click',this.PlayerAttackHandler);

    // while(!(this.PLAYER_BOARD.areAllSunk() || this.COMPUTER_BOARD.areAllSunk())){
    //     if(this.player_turn){
    //         this.PLAYER_ONE.yourTurn(this.COMPUTER_BOARD, attack_on);
    //         this.player_turn = false;
    //     }
    //     else{
    //         this.COMP_PLAYER.computerTurn(this.PLAYER_BOARD);
    //         this.player_turn = true;
    //     }
    // }
    // if(this.PLAYER_BOARD.areAllSunk())   console.log('COMPUTER WON!!')
    // if(this.COMPUTER_BOARD.areAllSunk())   console.log('YOU WON!!')
  };

  placeShipsLoop = (board_to_set, pl_selection = []) => {
    if (pl_selection.length > 0) {
      let size_array = [2, 3, 4, 4];
      let i = 0;
      pl_selection.forEach((placement) => {
        const chk = board_to_set.placeShips(
          placement[0],
          placement[1],
          size_array[i],
          true,
        );
        i = i + 1;
      });
    } else {
      let i = 0;
      let size_array = [2, 3, 4, 4];
      var possible_places = [
        "0,0",
        "0,1",
        "0,2",
        "0,3",
        "0,4",
        "0,5",
        "0,6",
        "1,0",
        "1,1",
        "1,2",
        "1,3",
        "1,4",
        "1,5",
        "1,6",
        "2,0",
        "2,1",
        "2,2",
        "2,3",
        "2,4",
        "2,5",
        "2,6",
        "3,0",
        "3,1",
        "3,2",
        "3,3",
        "3,4",
        "3,5",
        "3,6",
        "4,0",
        "4,1",
        "4,2",
        "4,3",
        "4,4",
        "4,5",
        "4,6",
        "5,0",
        "5,1",
        "5,2",
        "5,3",
        "5,4",
        "5,5",
        "5,6",
        "6,0",
        "6,1",
        "6,2",
        "6,3",
        "6,4",
        "6,5",
        "6,6",
      ];

      while (i < 4) {
        var coord_to_put = Math.floor(Math.random() * possible_places.length);
        coord_to_put = possible_places.splice(coord_to_put, 1);
        const chk = board_to_set.placeShips(
          String(coord_to_put),
          Math.random() < 0.5 ? "H" : "V",
          size_array[i],
        );
        if (chk) {
          i += 1;
        }
      }
    }

    // let i = 0;
    // let size_array = [2,3,4,4];
    // var possible_places =
    // [
    //     '0,0', '0,1', '0,2', '0,3', '0,4', '0,5',
    //     '0,6', '1,0', '1,1', '1,2', '1,3', '1,4',
    //     '1,5', '1,6', '2,0', '2,1', '2,2', '2,3',
    //     '2,4', '2,5', '2,6', '3,0', '3,1', '3,2',
    //     '3,3', '3,4', '3,5', '3,6', '4,0', '4,1',
    //     '4,2', '4,3', '4,4', '4,5', '4,6', '5,0',
    //     '5,1', '5,2', '5,3', '5,4', '5,5', '5,6',
    //     '6,0', '6,1', '6,2', '6,3', '6,4', '6,5',
    //     '6,6'
    // ]

    // while(i<4){
    //     var coord_to_put = Math.floor(Math.random() * possible_places.length);
    //     coord_to_put = possible_places.splice(coord_to_put, 1);
    //     const chk =board_to_set.placeShips(String(coord_to_put),Math.random() < 0.5 ? 'H' : 'V', size_array[i] );
    //     if(chk) i+=1;
    // }
  };
}

module.exports = GameLoop;
