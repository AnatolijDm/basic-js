module.exports = function countCats(arr) {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "^^") {
      result = result + 1;
    } else if (arr[i].includes('^^')) {
      for (j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === '^^') {
          result = result + 1;
        }
      }
    }
  }
  return result;
 };
