'use strict';
/*
7. При помощи цикла `for..in` перебрать объект-справочник с датами рождения и
смерти людей и вернуть справочник с продолжительностью их жизни. Например:
```js
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }
```
*/

const ages = (persons) => {
  // Use for..in to calculate age for each person
  const calculated = {};
  for (const personName in persons) {
    const person = persons[personName];
    calculated[personName] = person.died - person.born;
  }
  return calculated;
};

//console.log(ages(persons));

module.exports = { ages };
