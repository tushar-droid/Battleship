//This import statement messes with the jest testing
//import './styles.css';
const GameLoop = require('./gameloop')


class gameScreen{

    CreatePage(player_ship_placements){
        const main_container = document.querySelector('.game-container');
        const left_side = this.#CreateAndSetClassName('div', 'left-side')
        const right_side = this.#CreateAndSetClassName('div', 'right-side');
        main_container.style = '';                              //removes all the styling applied by the player_ships.js
        main_container.innerHTML = '';                          //removes elements from player_ships.js
        const gm_loop = new GameLoop();
        gm_loop.gameLoop(player_ship_placements);

        const pl_brd = gm_loop.PLAYER_BOARD.Board
        const comp_brd = gm_loop.COMPUTER_BOARD.Board;
 


        const player_grid = this.#PlayerSideUI(pl_brd);
        const computer_grid = this.#ComputerSideUI(comp_brd);
        left_side.appendChild(player_grid);
        right_side.appendChild(computer_grid)

        main_container.appendChild(left_side);
        main_container.appendChild(right_side);


        gm_loop.playGame();


    }

    #ComputerSideUI(comp_brd){
        
        const comp_side = this.#CreateAndSetClassName('div', 'comp-side')
        const comp_title = this.#CreateAndSetClassName('div', 'h3');
        comp_title.style = 'font-size:x-large;'
        comp_title.textContent = 'COMPUTER SIDE';
        const grid_container = this.#CreateAndSetClassName('div', 'comp-grid');
        this.#createGrid(grid_container, comp_brd, false);


        comp_side.appendChild(comp_title)
        comp_side.appendChild(grid_container);
        return comp_side;
    }

    #PlayerSideUI(pl_brd){
        const player_side = this.#CreateAndSetClassName('div', 'player-side')
        const player_title = this.#CreateAndSetClassName('div', 'h3');
        player_title.style = 'font-size:x-large;'
        player_title.textContent = 'PLAYER SIDE';

        const grid_container = this.#CreateAndSetClassName('div', 'player-grid');
        this.#createGrid(grid_container, pl_brd,true);
        player_side.appendChild(player_title);
        player_side.appendChild(grid_container);
        return player_side;
    }
    #createGrid(container, brd, isPlayer){ 
        for(let i = 9; i>=0; i--){
            for(let j = 0; j<10; j++){
                const grid_elem = this.#CreateAndSetClassName('div','grid-elem' ,isPlayer?`P${j},${i}`:`C${j},${i}`,`${j},${i}`);
                if(brd.get(`${j},${i}`) instanceof Object && isPlayer )          //REMEMBER TO UNCOMMENT THIS  
                {   grid_elem.classList.add('ship-coord');
                    
                    }
                // else
                //     grid_elem.textContent = brd.get(`${i},${j}`);
                container.appendChild(grid_elem);
            }
        }
        
    }



    #CreateAndSetClassName(type, name, id, data){
        const container = document.createElement(type);
        container.classList.add(name);
        if(id){
            container.id = id;
        }
        if(data) container.setAttribute('coords', data)
        return container;
    }

}


// const game = new gameScreen();
// game.CreatePage();

module.exports = gameScreen;