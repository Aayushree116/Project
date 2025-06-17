let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 3);
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(doubled, filtered, sum);