const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
const ords = tail(words);
assertEqual(ords[0], "Lighthouse");
assertEqual(ords[1], "Labs");

const oneElement = ["1"];
console.log(tail(oneElement));

const empty = [];
console.log(tail(empty));
