'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

console.log(lines);

const raio = Number(lines[0]);
const PI = 3.14159;

const volumeEsfera = (4/3) * PI * Math.pow(raio, 3);

console.log(`VOLUME = ${volumeEsfera.toFixed(3)}`);
