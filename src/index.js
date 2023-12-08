import "./styles.css";
const gameScreen = require("./gameScreen");

class UserPlaceShips {
  placements = [];
  sizes = [2, 3, 4, 4];
  ind = 0;
  shipPlacementUI = () => {
    let game_container = document.querySelector(".game-container");
    game_container.innerHTML = "";
    game_container.style = "flex-direction:column; align-items:center;";
    let CURRENT_ORIENTATION = "H";

    const main_container = this.#CreateAndSetClassName("div", "set-ships");
    const heading = this.#CreateAndSetClassName("h1", "placeships-heading");
    const empty_grid_container = this.#CreateAndSetClassName(
      "div",
      "empty-grid-container",
    );
    const right_side = this.#CreateAndSetClassName("div", "right-side");
    const grid = this.#CreateAndSetClassName("div", "ships-grid");
    const orientation_switch_container = this.#CreateAndSetClassName(
      "div",
      "switcher",
    );
    const play_game = this.#CreateAndSetClassName("button", "start-game");

    let elem = document.createElement("h3");
    elem.textContent = "H";
    elem.style = "margin: 2%";
    orientation_switch_container.appendChild(elem);
    const switch_label = this.#CreateAndSetClassName(
      "label",
      "switch",
      "switch",
    );
    const inp =
      '<input type="checkbox" class="orientation"><span class="slider round"></span>';
    switch_label.innerHTML = inp;
    orientation_switch_container.appendChild(switch_label);
    elem = document.createElement("h3");
    elem.style = "margin: 2%";
    elem.textContent = "V";
    play_game.textContent = "START";

    orientation_switch_container.appendChild(elem);

    this.#createGrid(grid);
    heading.textContent = "PLACE YOUR SHIPS";
    empty_grid_container.appendChild(grid);
    const instructions = document.createElement("h3");
    instructions.classList.add("instructions");
    instructions.textContent =
      "YOU HAVE A TOTAL OF 4 SHIPS OF SIZE 2,3,4,4 PLACE YOUR SHIPS STRATEGICALLY I MIGHT BE GOOD AT THIS LOGIC";
    right_side.appendChild(instructions);

    game_container.appendChild(heading);
    main_container.appendChild(empty_grid_container);
    right_side.appendChild(orientation_switch_container);
    main_container.appendChild(right_side);
    game_container.appendChild(main_container);
    game_container.appendChild(play_game);

    document
      .querySelector(".orientation")
      .addEventListener("change", (e) =>
        e.target.checked
          ? (CURRENT_ORIENTATION = "V")
          : (CURRENT_ORIENTATION = "H"),
      );

    document.addEventListener("mouseover", (e) => {
      if (e.target.classList.value === "grid-elem")
        this.Preview(e.target, CURRENT_ORIENTATION, this.sizes[this.ind]);
    });

    document.addEventListener("click", (e) => {
      if (e.target.classList[0] === "grid-elem") {
        let elems = document.querySelectorAll(".possible_ship");
        if (elems.length > 0) {
          this.ind += 1;
          this.placements.push([e.target.id, CURRENT_ORIENTATION]);
        }
        elems.forEach((elem) => {
          elem.classList.add("ship-coord");
        });
      } else if (e.target.classList[0] === "replay-btn") {
        const new_game = new UserPlaceShips();
        new_game.shipPlacementUI();
      }
    });

    play_game.addEventListener("click", () => {
      if (this.ind < 4) window.alert("Please place 4 ships");
      else {
        const game = new gameScreen();
        game.CreatePage(this.placements);
      }
    });
  };

  #CreateAndSetClassName(type, name, id, data) {
    const container = document.createElement(type);
    container.classList.add(name);
    if (id) {
      container.id = id;
    }
    if (data) container.setAttribute("coords", data);
    return container;
  }

  #createGrid(container) {
    for (let i = 9; i >= 0; i--) {
      for (let j = 0; j < 10; j++) {
        const grid_elem = this.#CreateAndSetClassName("div", "grid-elem");
        grid_elem.setAttribute("coord", `${j},${i}`);
        grid_elem.id = `${j},${i}`;
        container.appendChild(grid_elem);
      }
    }
  }

  Preview(src_element, orientation, size) {
    if (src_element.classList.contains("ship-coord")) return;
    let [x, , y] = src_element.id;
    x = parseInt(x);
    y = parseInt(y);
    if (orientation === "H") {
      if (x + size <= 10) {
        src_element.classList.add("possible_ship");
        let i = 1;
        while (i < size) {
          let elem = document.getElementById(`${x + i},${y}`);
          if (elem.classList.contains("ship-coord")) {
            this.#avoidOverlap();
            return;
          }
          elem.classList.add("possible_ship");
          i++;
        }
      }
    } else if (orientation === "V") {
      if (y >= size - 1) {
        src_element.classList.add("possible_ship");
        let i = 1;
        while (i < size) {
          let elem = document.getElementById(`${x},${y - i}`);
          if (elem.classList.contains("ship-coord")) {
            this.#avoidOverlap();
            return;
          }
          elem.classList.add("possible_ship");
          i++;
        }
      }
    }

    src_element.addEventListener("mouseleave", () => {
      let elems = document.querySelectorAll(".possible_ship");
      elems.forEach((elem) => elem.classList.remove("possible_ship"));
    });
  }

  #avoidOverlap() {
    let overlap_elems = document.querySelectorAll(".possible_ship");
    overlap_elems.forEach((element) => {
      element.classList.remove("possible_ship");
    });
  }
}

const temp = new UserPlaceShips();
temp.shipPlacementUI();
