const container = document.getElementById("container");
const clearBtn = document.getElementById("clearBtn");

const createGrid = (rows, cols) => {
    clearGrid();
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < rows * cols; i++) {
        let grid = document.createElement("div");
        container.appendChild(grid).className = "grid-item";
        grid.addEventListener("mouseover", changeColor);
    }
};

const changeColor = (event) => {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
};

const clearGrid = () => {
    var gridItems = container.querySelectorAll("div");
    gridItems.forEach((item) => (item.style.backgroundColor = "#ffffff"));
};

clearBtn.addEventListener("click", clearGrid);
window.addEventListener("load", createGrid(32, 32));
