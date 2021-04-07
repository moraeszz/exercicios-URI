'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

console.log(lines);

let diasTotais = parseInt(Number(lines [0]));

const quantidadeAno = parseInt(diasTotais / 365);
diasTotais = diasTotais % 365;

const quantidadeMes = parseInt(diasTotais / 30);
diasTotais = diasTotais % 30;

const quantidadeDias = parseInt(diasTotais / 1);
diasTotais = diasTotais % 1;

console.log (`${quantidadeAno.toFixed(0)} ano(s)`);
console.log (`${quantidadeMes.toFixed(0)} mes(es)`);
console.log (`${quantidadeDias.toFixed(0)} dia(s)`);