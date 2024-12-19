'use strict';
/*
Реализуйте функцию `sum(...args)`, которая суммирует все свои аргументы, пятью
разными способами. Примеры вызовов с результатами:
```js
const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7
```
4. Цикл `do..while`
*/

const sum = (...args) => {
  // Use do..while loop and accumulator variable
  if (args.length === 0) return 0;
  //args.unshift(0);
  let amount = 0;
  do {
    amount += args.shift();
    //amount += args.pop();
  }
  while (args.length > 0);
  return amount;
};

/*
console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));
*/
module.exports = { sum };
