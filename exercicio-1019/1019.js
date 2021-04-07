'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

console.log(lines);

let totalSegundos = parseInt(Number(lines [0]));

const quantidadeHoras = parseInt(totalSegundos / 3600);
totalSegundos = totalSegundos % 3600;

const quantidadeMinutos = parseInt(totalSegundos / 60);
totalSegundos = totalSegundos % 60;

const quantidadeSegundos = parseInt(totalSegundos / 1);
totalSegundos = totalSegundos % 1;

console.log (`${quantidadeHoras.toFixed(0)}:${quantidadeMinutos.toFixed(0)};${quantidadeSegundos.toFixed(0)}`);