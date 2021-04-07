'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

console.log(lines);

const valor = Number(lines [0]);
const quantidadeMinutos = (60 * valor) / 30;

console.log(`${quantidadeMinutos.toFixed(0)} minutos`);