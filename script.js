const container = document.getElementById("container");
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", clearGrid);
window.addEventListener("load", createGrid(32, 32));

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < rows * cols; c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", changeColor);
    }
}

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function clearGrid() {
    var gridItems = container.querySelectorAll("div");
    gridItems.forEach((item) => (item.style.backgroundColor = "#ffffff"));
}
