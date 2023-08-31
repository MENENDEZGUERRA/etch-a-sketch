// grid.js

// Function to create the grid
function createGrid(rows, cols) {
    const container = document.createElement("div");
    container.classList.add("grid-container");
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            container.appendChild(cell);
        }
    }
    
    return container;
}

// Add the grid to the body on window load
window.addEventListener("load", () => {
    const rows = 16;
    const cols = 16;
    
    const grid = createGrid(rows, cols);
    document.body.appendChild(grid);
});
