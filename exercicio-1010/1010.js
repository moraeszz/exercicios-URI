'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

console.log(lines);

const peca1 = Number(lines [0]);
const quantidadePeca1 = Number(lines [1]);
const valorUnitarioPeca1 = Number(lines [2]);

const peca2 = Number(lines [3]);
const quantidadePeca2 = Number(lines [4]);
const valorUnitarioPeca2 = Number(lines [5]);

const totalPeca1 = quantidadePeca1 * valorUnitarioPeca1;
const totalPeca2 = quantidadePeca2 * valorUnitarioPeca2;

const valorTotalCompra = totalPeca1 + totalPeca2;

console.log(`TOTAL A PAGAR: R$ ${valorTotalCompra.toFixed(2)}`);
