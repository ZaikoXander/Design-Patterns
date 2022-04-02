import createCalc from './calc.js';

const calc = createCalc();

console.log(calc.somar(5, 6));
console.log(calc.subtrair(8, 3));
console.log(calc.multiplicar(40, 9));
console.log(calc.dividir(1000, 10));