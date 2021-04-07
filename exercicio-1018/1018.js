'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

console.log(lines);

let valor = parseInt(Number(lines [0]));

console.log (`${valor}`);

let quantidadeNotas = parseInt(valor / 100);
console.log (`${quantidadeNotas} nota(s) de R$ 100,00`);
valor = valor % 100;

quantidadeNotas = parseInt(valor / 50);
console.log (`${quantidadeNotas} nota(s) de R$ 50,00`);
valor = valor % 50;

quantidadeNotas = parseInt(valor / 20);
console.log (`${quantidadeNotas} nota(s) de R$20,00`);
valor = valor % 20;

quantidadeNotas = parseInt(valor / 10);
console.log (`${quantidadeNotas} nota(s) de R$10,00`);
valor = valor % 10;

quantidadeNotas = parseInt(valor / 5);
console.log (`${quantidadeNotas} nota(s) de R$5,00`);
valor = valor % 5;

quantidadeNotas = parseInt(valor / 2);
console.log (`${quantidadeNotas} nota(s) de R$2,00`);
valor = valor % 2;

quantidadeNotas = parseInt(valor / 1);
console.log (`${quantidadeNotas} nota(s) de R$1,00`);
valor = valor % 1;


