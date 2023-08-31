// grid.js

let cells = []; // Store the cell elements
let paintingMode = "none"; // Track the current painting mode

// Function to create the grid
function createGrid(rows, cols) {
    const container = document.createElement("div");
    container.classList.add("grid-container");

    cells = []; // Reset the cells array

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cells.push(cell); // Add the cell to the array
            container.appendChild(cell);
        }
    }

    // Add the click event listener to each cell based on the painting mode
    cells.forEach(cell => {
        cell.addEventListener("mouseenter", () => {
            if (paintingMode === "black") {
                cell.classList.add("painted");
            } else if (paintingMode === "random") {
                cell.style.backgroundColor = getRandomColor();
            }
        });
    });

    return container;
}

// Function to reset the grid
function resetGrid() {
    cells.forEach(cell => {
        cell.classList.remove("painted");
        cell.style.backgroundColor = "white";
    });
    paintingMode = "none"; // Reset painting mode
}

// Function to set the painting mode
function setPaintingMode(mode) {
    paintingMode = mode;
}

// Function to generate random colors
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add the grid and buttons to the body on window load
window.addEventListener("load", () => {
    const rows = 16;
    const cols = 16;

    const grid = createGrid(rows, cols);
    document.body.appendChild(grid);

    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid";
    resetButton.addEventListener("click", resetGrid);

    const blackPaintButton = document.createElement("button");
    blackPaintButton.textContent = "Black Paint";
    blackPaintButton.addEventListener("click", () => setPaintingMode("black"));

    const randomPaintButton = document.createElement("button");
    randomPaintButton.textContent = "Random Paint";
    randomPaintButton.addEventListener("click", () => setPaintingMode("random"));

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(resetButton);
    buttonContainer.appendChild(blackPaintButton);
    buttonContainer.appendChild(randomPaintButton);

    document.body.appendChild(buttonContainer);
});
