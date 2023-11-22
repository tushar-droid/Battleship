//This import statement messes with the jest testing
import './styles.css';
const GameLoop = require('./gameloop')


class gameScreen{

    CreatePage(){
        const main_container = document.querySelector('.game-container');
        const left_side = this.#CreateAndSetClassName('div', 'left-side')
        const right_side = this.#CreateAndSetClassName('div', 'right-side');

        const gm_loop = new GameLoop();
        gm_loop.gameLoop();

        const pl_brd = gm_loop.PLAYER_BOARD.Board
        const comp_brd = gm_loop.COMPUTER_BOARD.Board;
 
        console.log('This is board: ', pl_brd);
        console.log('This is board: ', pl_brd);


        const player_grid = this.#PlayerSideUI(pl_brd);
        const computer_grid = this.#ComputerSideUI(comp_brd);
        left_side.appendChild(player_grid);
        right_side.appendChild(computer_grid)

        main_container.appendChild(left_side);
        main_container.appendChild(right_side);

    }

    #ComputerSideUI(comp_brd){
        
        const comp_side = this.#CreateAndSetClassName('div', 'comp-side')
        const comp_title = this.#CreateAndSetClassName('div', 'h3');
        comp_title.textContent = 'COMPUTER SIDE';
        const grid_container = this.#CreateAndSetClassName('div', 'comp-grid');
        this.#createGrid(grid_container, comp_brd);


        comp_side.appendChild(comp_title)
        comp_side.appendChild(grid_container);
        return comp_side;
    }

    #PlayerSideUI(pl_brd){
        const player_side = this.#CreateAndSetClassName('div', 'player-side')
        const player_title = this.#CreateAndSetClassName('div', 'h3');
        player_title.textContent = 'PLAYER SIDE';

        const grid_container = this.#CreateAndSetClassName('div', 'player-grid');
        this.#createGrid(grid_container, pl_brd);
        player_side.appendChild(player_title);
        player_side.appendChild(grid_container);
        return player_side;
    }
    #createGrid(container, brd){ 
        for(let i = 0; i<10; i++){
            for(let j = 0; j<10; j++){
                const grid_elem = this.#CreateAndSetClassName('div','grid-elem' ,`${i},${j}`);
                if(brd.get(`${i},${j}`) instanceof Object)  
                {   grid_elem.classList.add('ship-coord');
                    grid_elem.textContent = 'S';
                    }
                // else
                //     grid_elem.textContent = brd.get(`${i},${j}`);
                container.appendChild(grid_elem);
            }
        }
        
    }



    #CreateAndSetClassName(type, name, id){
        const container = document.createElement(type);
        container.classList.add(name);
        if(id){
            container.id = id;
        }
        return container;
    }

}



const game = new gameScreen();
game.CreatePage();