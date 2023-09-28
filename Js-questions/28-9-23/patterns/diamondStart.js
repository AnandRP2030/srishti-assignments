const diamondStar = (tr) => {
  let string = "";
  for (let i = 1; i < tr; i++) {
    for (let j = 0; j <= tr - i; j++) {
      string += " ";
    }
    for (let j = 1; j < i * 2; j++) {
      string += "*";
    }
    string += "\n";
  }

  for (let i = 1; i <= tr; i++) {
    for (let j = 1; j <= i + 1; j++) {
      string += " ";
    }
    for (let j = 1; j <= 2 * (tr - i) - 1; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
};
diamondStar(6);
