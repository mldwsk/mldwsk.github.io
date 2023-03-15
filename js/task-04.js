function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const allBoxes = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = `${30 + i * 10}px`;
    const singleBox = document.createElement("div");
    singleBox.style.backgroundColor = getRandomHexColor();
    singleBox.style.width = size;
    singleBox.style.height = size;
    console.log(singleBox);
    allBoxes.appendChild(singleBox);
  }
  document.getElementById("boxes").appendChild(allBoxes);
}

function destroyBoxes() {
  const listOfBoxes = document.getElementById("boxes");
  while (listOfBoxes.hasChildNodes()) {
    listOfBoxes.removeChild(listOfBoxes.firstChild);
  }
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const inputArea = document.querySelector("input");
let specifiedAmount = 0;

inputArea.addEventListener("input", (event) => {
  event.preventDefault();
  const chosenAmount = event.currentTarget;
  if (chosenAmount.value >= 1 && chosenAmount.value <= 99) {
    specifiedAmount = chosenAmount.value;
  } else if (chosenAmount.value > 100) {
    specifiedAmount = 100;
  } else if (chosenAmount.value < 0) {
    specifiedAmount = 1;
  } else {
    specifiedAmount = 0;
  }
  console.log(specifiedAmount);
});

createButton.addEventListener("click", createBoxes(specifiedAmount));
destroyButton.addEventListener("click", destroyBoxes);