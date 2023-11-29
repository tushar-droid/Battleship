const GameOver = (res) =>{
    const main_container = document.querySelector('.game-container');
    main_container.style = 'justify-content: center; align-items:center; font-size:xx-large;'
    main_container.textContent = res
}

module.exports = GameOver