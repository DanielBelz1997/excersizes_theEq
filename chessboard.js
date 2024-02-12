const chessboard = function (num) {
  let board = "";
  for (let x = 0; num > x; x++) {
    for (let i = 0; num > i; i++) {
      if (i % 2 === 0 && x % 2 === 0) {
        board += " ";
      } else if (i % 2 !== 0) {
        board += `#${x % 2 !== 0 ? " " : ""}`;
      }
    }
    board += `\n`;
  }
  console.log(board);
};

chessboard(8);
