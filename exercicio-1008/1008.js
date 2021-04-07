'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

console.log(lines);

const funcionario = Number(lines[0]);
const quantidadeHorasTrabalhadas = Number(lines[1]);
const valorHora = Number(lines[2]);

const salario = quantidadeHorasTrabalhadas * valorHora;

console.log(`NUMBER = ${funcionario}`);
console.log(`SALARY = U$ console${salario.toFixed(2)}`);


