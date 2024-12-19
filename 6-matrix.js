'use strict';
/*
6. Найдите максимальный элемент в двумерном массиве
```js
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9
```
*/

const max = (matrix) => {
  // Use nested for loop to find max value in 2d matrix
  let maxValue = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const matrixRow = matrix[i];
    for (let j = 0; j < matrixRow.length; j++) {
      maxValue = matrixRow[j] > maxValue ? matrixRow[j] : maxValue;
    }
  }
  return maxValue;
};

//console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

module.exports = { max };
