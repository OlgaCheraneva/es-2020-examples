const start = '       Hello Youtube ';
const end = 'This is new JavaScript features          ';

// console.log(start.trimStart() + end.trimEnd())
// console.log((start + end).trim())

// console.log('vk'.padStart(6, 'www.')) 6 - длина конечной строки. www. - заполнение строки, дублирующееся вначале.
// console.log('vk'.padEnd(6, '.com'))

// ===========

// Для валидации переданных параметров или создания доп. логики формирования строки
function tag(strings, name, age) {
    const [s1, s2, s3] = strings;
    const ageStr = age > 42 ? 'старшим' : 'младшим';
    return `${s1}${name}${s2}${ageStr}${s3}`;
}

const person = {
    name: 'Максим',
    age: 50,
};

const output = tag`Человек по имени ${person.name} является ${person.age} в семье!`;

console.log(output);
