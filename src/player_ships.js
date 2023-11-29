import './styles.css';
const gameScreen = require('./index');

class UserPlaceShips {
    shipPlacementUI = () =>{
        const game_container = document.querySelector('.game-container'); 
        game_container.style = 'flex-direction:column; align-items:center;'
        let CURRENT_ORIENTATION = 'H'

        const main_container = this.#CreateAndSetClassName('div', 'set-ships');
        const heading = this.#CreateAndSetClassName('h2', 'placeships-heading')
        const empty_grid_container = this.#CreateAndSetClassName('div', 'empty-grid-container');
        const grid = this.#CreateAndSetClassName('div', 'ships-grid')
        const orientation_switch_container = this.#CreateAndSetClassName('switcher');
        let elem = document.createElement('h3');
        elem.textContent = 'H'
        elem.style = 'margin: 2%';
        orientation_switch_container.appendChild(elem);
        const switch_label = this.#CreateAndSetClassName('label', 'switch', 'switch');
        const inp = '<input type="checkbox" class="orientation"><span class="slider round"></span>';
        switch_label.innerHTML = inp;
        orientation_switch_container.appendChild(switch_label)
        elem = document.createElement('h3');
        elem.style = 'margin: 2%';
        elem.textContent = 'V'
        orientation_switch_container.appendChild(elem)

        this.#createGrid(grid)
        heading.textContent = 'PLACE YOUR SHIPS';
        empty_grid_container.appendChild(grid)

        
        game_container.appendChild(heading);
        main_container.appendChild(empty_grid_container);
        main_container.appendChild(orientation_switch_container)
        game_container.appendChild(main_container);



        
        document.querySelector('.orientation').addEventListener('change', e => e.target.checked ? CURRENT_ORIENTATION = 'V': CURRENT_ORIENTATION = 'H')

        document.addEventListener('mouseover', (e) =>{
            if(e.target.matches('.grid-elem')){
                console.log(CURRENT_ORIENTATION)
                console.log(e.target.getAttribute('coord'))
                this.#preview(CURRENT_ORIENTATION, e.target)
            }
        })


        // const game = new gameScreen();
        // game.CreatePage();

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

    #createGrid(container){ 
        for(let i = 9; i>=0; i--){
            for(let j = 0; j<10; j++){
                const grid_elem = this.#CreateAndSetClassName('div','grid-elem');
                grid_elem.setAttribute('coord', `${j},${i}`)
                grid_elem.id = `${j},${i}`;
                container.appendChild(grid_elem);
            }
        }
    }


    #preview(orientation, target_elem){
        const START_ELEM = target_elem;
        let size = 2;
        let [x,,y] = target_elem.getAttribute('coord')
        console.log('y: ', y);
        let all_elems = [target_elem];
        if(orientation ==='H' && x<=10-size){
            target_elem.classList.add('possible_ship')
            for(let i = 1;i<size;i++){
                target_elem.nextSibling.classList.add('possible_ship')
                target_elem = target_elem.nextSibling;
                all_elems.push(target_elem);
            }
            
        }
        else if(orientation ==='V' && y>=size-1){
            target_elem.classList.add('possible_ship');
            for(let i = 1; i<size; i++){
                console.log('ID', `${x},${y+i}`)
                let elem = document.getElementById(`${x},${parseInt(y)-i}`);
                elem.classList.add('possible_ship');
                all_elems.push(elem)
            }

        }

        START_ELEM.addEventListener('mouseleave', () =>{
            console.log('This worked ')
            all_elems.forEach(elem => {  
                elem.classList.remove('possible_ship')
            });
        });


 


        
       }



}


const temp = new UserPlaceShips();
temp.shipPlacementUI()
