import fabricarPessoa from "./fabrica.js";

const pessoaA = fabricarPessoa('Zaiko', 'Xander');

console.log(pessoaA);
console.log(pessoaA.nome);
console.log(pessoaA.sobrenome);
console.log(pessoaA.nomeCompleto());