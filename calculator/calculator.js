const inputField = document.getElementById("input-field");
const buttons = document.querySelectorAll(".key");
let prevNum = 0;
let addition = false;
let subtraction = false;
let division = false;
let multiplication = false;

function makeItFalse() {
  addition = false;
  subtraction = false;
  division = false;
  multiplication = false;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnText = button.textContent;

    if (btnText === "C" || btnText === "CE") {
      prevNum = 0;
      makeItFalse();
      inputField.value = "";
    } else if (
      btnText === "1" ||
      btnText === "2" ||
      btnText === "3" ||
      btnText === "4" ||
      btnText === "5" ||
      btnText === "6" ||
      btnText === "7" ||
      btnText === "8" ||
      btnText === "9" ||
      btnText === "0"
    ) {
      inputField.value += btnText;
    } else if (btnText === "+") {
      makeItFalse();
      addition = true;
      prevNum = Number(inputField.value);
      inputField.value = "";
    } else if (btnText === "-") {
      prevNum = Number(inputField.value);
      makeItFalse();
      subtraction = true;
      inputField.value = "";
    } else if (btnText === "x") {
      prevNum = Number(inputField.value);
      makeItFalse();
      multiplication = true;
      inputField.value = "";
    } else if (btnText === "➗") {
      prevNum = Number(inputField.value);
      makeItFalse();
      division = true;
      inputField.value = "";
    } else if (btnText === "%") {
      inputField.value = Math.round(Number(inputField.value) / 100);
    } else if (btnText === "=") {
      if (addition) {
        inputField.value = prevNum + Number(inputField.value);
      } else if (subtraction) {
        inputField.value = prevNum - Number(inputField.value);
      } else if (multiplication) {
        inputField.value = prevNum * Number(inputField.value);
      } else if (division) {
        inputField.value = Math.round(prevNum / Number(inputField.value));
      }
    } else {
      prevNum = 0;
      makeItFalse();
      inputField.value = "";
    }
  });
});
