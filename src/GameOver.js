const GameOver = (res) =>{
    const main_container = document.querySelector('.game-container');
    main_container.style = 'justify-content: space-evenly; align-items:center; font-size:xx-large; flex-direction:column; '
    main_container.textContent = res;
    const replay_button = document.createElement('button');
    replay_button.classList.add('replay-btn');
    replay_button.textContent = 'PLAY AGAIN!';
    main_container.appendChild(replay_button);;
}

module.exports = GameOver