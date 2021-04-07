'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

console.log(lines);

const distanciaPercorrida = Number(lines[0])
const combustivelGasto = Number(lines[1]);

const consumoMedia = distanciaPercorrida / combustivelGasto;

console.log(consumoMedia.toFixed(3) + " km/l ");


