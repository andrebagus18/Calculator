const pressButton = document.querySelectorAll(".btn-number");
const btnOp = document.querySelectorAll(".btn-op");
const display = document.getElementById("display");
const clear = document.querySelector(".clear");
const calculate = document.querySelector(".calculate");
const miniDisplay = document.getElementById("miniDisplay");

let currentNumber = "";
let previousNumber = "";
let operator = "";
let resultDisplay = false;

pressButton.forEach((item) => {
  item.addEventListener("click", () => {
    if (resultDisplay) {
      currentNumber = "";
      display.value = "";
      resultDisplay = false;
    }
    currentNumber += item.textContent; //mendengarkan item button yang di klik
    display.value = currentNumber; //menampilkan item klik pada display
    // console.log(item);
  });
});

btnOp.forEach((buttonOp) => {
  buttonOp.addEventListener("click", () => {
    // console.log(btnOp);
    if (currentNumber === "") return;
    previousNumber = currentNumber;
    operator = buttonOp.value; //masukkan button yg di klik ke variable operator
    // console.log(operator);
    miniDisplay.value = currentNumber + " " + operator; //menaikkan angka dan operator ke display mini
    currentNumber = ""; // kosongkan nilai pertama untuk menerima nilai kedua
    display.value = ""; // kosongkan display juga
  });
});

calculate.addEventListener("click", () => {
  // console.log(calculate);
  if (currentNumber === "" || previousNumber === "") return;

  const numb1 = parseFloat(previousNumber);
  const numb2 = parseFloat(currentNumber);
  let result;
  if (operator === "+") {
    result = numb1 + numb2;
  } else if (operator === "-") {
    result = numb1 - numb2;
  } else if (operator === "x") {
    result = numb1 * numb2;
  } else if (operator === "/") {
    result = numb1 / numb2;
  }

  // console.log(result);
  display.value = result;
  miniDisplay.value =
    previousNumber + " " + operator + " " + currentNumber + " ="; //menaikkan angka dan operator ke display mini
  resultDisplay = true; //set display jika sudah pernah dibuat dan reset

  previousNumber = "";
  currentNumber = "";
  operator = "";
});

clear.addEventListener("click", () => {
  display.value = "";
  miniDisplay.value = "";
  previousNumber = "";
  currentNumber = "";
  operator = "";
  resultDisplay = false;
});
