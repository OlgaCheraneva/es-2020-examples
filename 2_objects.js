const person = {
    name: 'Max',
    age: 30,
};

// console.log(Object.getOwnPropertyDescriptors(person))
// console.log(Object.getOwnPropertyDescriptor(person, 'age')) ES2020 syntax

// console.log(Object.entries(person))
// console.log(Object.entries(['M', 'A', 'X'])) [['0': 'M'], ['1': 'A'], ['2': 'X']]

// ES2020 syntax: Object.fromEntries
// console.log(Object.fromEntries([[ 'name', 'Max' ], [ 'age', 30 ]])) ES2020 syntax
// console.log(Object.fromEntries(Object.entries(person)))

// for (const [key, value] of Object.entries(person)) {
// 	console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`)
// }

console.log(Object.values(person));
console.log(Object.keys(person));
