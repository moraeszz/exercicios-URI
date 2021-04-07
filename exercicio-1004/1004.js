'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

const numero1 = Number(lines[0]);
const numero2 = Number(lines[1]);

const prod = numero1 * numero2;

console.log(`PROD = ${prod}`);
