'use strict';

const lines = prompt ('Digite os valores de entrada').split(' ');

console.log(lines);

const tempoGasto = Number(lines[0])
const velocidadeMedia = Number(lines[1]);

const totalPercorrido = tempoGasto * velocidadeMedia;
const qntdCombustiveisGasto = totalPercorrido / 12;

console.log(qntdCombustiveisGasto.toFixed(3));
