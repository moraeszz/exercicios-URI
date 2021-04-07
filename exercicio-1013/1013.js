'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

console.log(lines);

const A = Number(lines[0]);
const B = Number(lines[1]);
const C = Number(lines[2]);

const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(maiorXC + " eh o maior");
