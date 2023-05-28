const pen = document.getElementById("Pen");
const ere = document.getElementById("Ere");
const btn = document.getElementById("btn");
const EboxElements = document.querySelectorAll(".EtchBox"); //wszystkie elementy z class .EtchBox


function attachEventListeners() {

  EboxElements.forEach((element) => { // dla kazdego elementu for EACH "element"

    element.addEventListener("click", () => {

      if (pen.checked) {
        element.style.backgroundColor = "black";
      } 

      else if (ere.checked) {
        element.style.backgroundColor = "white";
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





