const pen = document.getElementById("Pen");
const ere = document.getElementById("Ere");
const btn = document.getElementById("btn");
const mainColor = document.getElementById("mainColor");


const black = document.getElementById("black"); //0
const red = document.getElementById("red"); //1 
const blue = document.getElementById("blue"); //2
const gray = document.getElementById("gray"); //3 
const pink = document.getElementById("pink"); //4 
const purple = document.getElementById("purple"); //5 
const green = document.getElementById("green"); //6 
const orange = document.getElementById("orange"); //7 
const yellow = document.getElementById("yellow"); //8 

let value = 0;

black.addEventListener("click", e => {
  value = 0;
  mainColor.style.backgroundColor = "black";
})

red.addEventListener("click", e => {
  value = 1;
  mainColor.style.backgroundColor = "red";
})

blue.addEventListener("click", e => {
  value = 2;
  mainColor.style.backgroundColor = "blue";
})

gray.addEventListener("click", e => {
  value = 3;
  mainColor.style.backgroundColor = "gray";
})

pink.addEventListener("click", e => {
  value = 4;
  mainColor.style.backgroundColor = "pink";
})

purple.addEventListener("click", e => {
  value = 5;
  mainColor.style.backgroundColor = "purple";
})

green.addEventListener("click", e => {
  value = 6;
  mainColor.style.backgroundColor = "green";
})

orange.addEventListener("click", e => {
  value = 7;
  mainColor.style.backgroundColor = "orange";
})

yellow.addEventListener("click", e => {
  value = 8;
  mainColor.style.backgroundColor = "yellow";
})


const EboxElements = document.querySelectorAll(".EtchBox"); //wszystkie elementy z class .EtchBox

function attachEventListeners() {

  EboxElements.forEach((element) => { // dla kazdego elementu for EACH "element"

    element.addEventListener("mousedown", () => {

      if (pen.checked) {
        if (value == 0) {
          element.style.backgroundColor = "black";
        }
        else if (value == 1) {
          element.style.backgroundColor = "red";
        }
        else if (value == 2) {
          element.style.backgroundColor = "blue";
        }
        else if (value == 3) {
          element.style.backgroundColor = "gray";
        }
        else if (value == 4) {
          element.style.backgroundColor = "pink";
        }
        else if (value == 5) {
          element.style.backgroundColor = "purple";
        }
        else if (value == 6) {
          element.style.backgroundColor = "green";
        }
        else if (value == 7) {
          element.style.backgroundColor = "orange";
        }
        else if (value == 8) {
          element.style.backgroundColor = "yellow";
        }
      } 

      else if (ere.checked) {
        element.style.backgroundColor = "white";
        mainColor.style.backgroundColor = "white";
      }

    });
  });
}

function clearWholeBoard() {
    EboxElements.forEach((element) => { 
        element.style.backgroundColor = "white"
    })
}

pen.addEventListener("change", attachEventListeners);
ere.addEventListener("change", attachEventListeners);
btn.addEventListener("click", clearWholeBoard)





