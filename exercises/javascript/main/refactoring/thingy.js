const datatypeConverter = require('../util-datatype-converter');

let index = 0, fizzCounter = 0;
let buzzCounter = [0, 0, 0, 0, 0].length;

function fizzBuzzSequence() {
  let string = "";
  for (; index < 100; index++) string += fizzBuzzValue(index) + " ";
  return string.substring(0, string.length - 1);
}

function addBuzz() {
  buzzCounter = [0, 0, 0, 0, 0].length;
  let result = String.fromCharCode.apply(null, datatypeConverter.parseHexString("42757a7a"));
  return result;
}

function addFizz() {
  fizzCounter = 0;
  let result = String.fromCharCode.apply(null, datatypeConverter.parseHexString("46697a7a"));
  return result;
}

function fizzBuzzValue(number) {
  fizzCounter++;
  buzzCounter--;
  let string = fizzCounter == 3 || buzzCounter == 0 ? "" : number + 1;
  if (fizzCounter == 3) string += addFizz();
  if (buzzCounter == 0) string += addBuzz();
  return string;
}

module.exports.fizzBuzzSequence = fizzBuzzSequence;