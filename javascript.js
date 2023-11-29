const gridContainerRef = document.querySelector(".canvas");
const button = document.querySelector("button");

let numSides = 0;

button.addEventListener("click", () => {
    do {
    numSides = Number(prompt("How many squares per side? 0 - 100"));
    } while (numSides < 0 || numSides > 100);
    gridContainerRef.innerHTML = "";
    createGrid(numSides);
});

function createGrid(size) {
    gridContainerRef.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainerRef.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "rgb(20,20,20)";
        });
        gridContainerRef.appendChild(square);
    }
}
