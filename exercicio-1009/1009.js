'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

console.log(lines);

const nome = String(lines[0]);
const salarioFixo = Number(lines[1]);
const totalVendas = Number(lines[2]);

const comissao = totalVendas * 0.15;
const salarioFinal = salarioFixo + comissao;

console.log(`TOTAL = U$ ${salarioFinal.toFixed(2)}`);

