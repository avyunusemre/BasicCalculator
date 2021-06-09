const numbers = document.querySelectorAll(".btn-number");
const operators = document.querySelectorAll(".btn-oper");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");
const float = document.querySelector(".btn-float");
const screen = document.querySelector(".screen");

let result = 0;
let firstNumber = "";
let secondNumber = "";
let selectedOperator = "";

eventListeners();

function eventListeners() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", sayilar);
  }

  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", islem);
  }

  equal.addEventListener("click", esittir);

  clear.addEventListener("click", sil);

  float.addEventListener("click", sayilar);
}

function sayilar() {
  screen.value += this.value;

  if (selectedOperator == "") {
    firstNumber += this.value;
    console.log(firstNumber);
  } else if (selectedOperator != "") {
    secondNumber += this.value;
    console.log(secondNumber);
  }
}

function islem() {
  if (selectedOperator == "") {
    screen.value += this.value;
    selectedOperator = this.value;
    console.log(selectedOperator);
  } else {
    esittir();
    screen.value += this.value;
    selectedOperator = this.value;
  }
}

function esittir() {
  switch (selectedOperator) {
    case "+":
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case "-":
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case "/":
      result = Number(firstNumber) / Number(secondNumber);
      break;
    case "*":
      result = Number(firstNumber) * Number(secondNumber);
      break;
  }
  if (result % 1 != 0) {
    screen.value = result.toFixed(2);
  } else {
    screen.value = result;
  }

  firstNumber = screen.value;
  secondNumber = "";
  selectedOperator = "";
}

function sil() {
  firstNumber = "";
  secondNumber = "";
  selectedOperator = "";
  screen.value = "";
  result = "";
}
