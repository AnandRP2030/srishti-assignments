const timerPattern = (rows) => {
  let string = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j < i; j++) {
      string += " ";
    }
    for (let j = 1; j <= 2 * (rows - i) - 1; j++) {
      string += "*";
    }
    string += "\n";
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j <= rows - i - 1; j++) {
      string += " ";
    }
    for (let j = 1; j < i * 2; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
};

timerPattern(6);
