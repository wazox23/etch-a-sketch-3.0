"use strict";
const board = document.querySelector(".board");
let color = "black";


function populateBoard(size) {
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    board.style.border = '5px solid white';
    board.style.borderRadius = '20px'
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        board.append(square);
        square.classList.add("squares")
        square.addEventListener("mouseover", colorSquare)
    }
};

let inputColor = document.getElementById("inputColor");
const setColorButton = document.getElementById("setColor")
setColorButton.addEventListener("click",()=>{ 
    color = inputColor.value;
})

function changeSize(input){
    populateBoard(input);
};

function colorSquare(){
    this.style.backgroundColor = `${color}`;
}

function resetBoard(){
    let squares = document.querySelectorAll(".squares")
    squares.forEach((div) => div.style.backgroundColor = "white");
}
populateBoard(20)

