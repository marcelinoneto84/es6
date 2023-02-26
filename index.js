var numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((n) => n > 3));

console.log(numbers.reduce((acum, current) => acum + current));
console.log(numbers.reduce((acum, current) => acum + current, 10));

console.log(numbers.find(n => n === 3));

const [a, b, c, d, e, f = 100] = numbers;
console.log(`a = ${a} - b = ${b} - f = ${f}`);

const [g, h, ...i] = numbers;
console.log(`g = ${g} - h = ${h} - i = [${i}]`);

const [j, l, , , m] = numbers;
console.log(`j = ${j} - l = ${l} - m = [${m}]`);

let [n, o, ...p] = numbers;
console.log(`n = ${n} - o = ${o} - p = [${p}]`);
[p, o, n] = [n, o, p];
console.log(`n = [${n}] - o = ${o} - p = ${p}`);

const otherNumbers = [10, 20, 30, numbers];
console.log(otherNumbers);
//Spread syntax ... - mesmo que o push de elementos no array
const otherNumbers2 = [10, 20, 30, ...numbers];
console.log(otherNumbers2);

// direto no node
const s = new Set();
s.add(1).add(2).add(3).add(1);
console.log(s);
console.log(s.has(2));
console.log(s.has(20));
console.log(s.delete(20));
console.log(s.delete(2));
console.log(s);

const ma = new Map();
console.log(ma);
console.log(ma.set('banana', 10));
console.log(ma.has('banana'));
console.log(ma.has('orange'));