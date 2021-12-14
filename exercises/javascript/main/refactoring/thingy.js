const datatypeConverter = require('../util-datatype-converter');

const MULTIPLE_FOR_FIZZ = 3; 
const MULTIPLE_FOR_BUZZ = 5; 
let index = 0, fizzCounter = 0;
let buzzCounter = MULTIPLE_FOR_BUZZ;

function decodeHexValue(data) {
  return String.fromCharCode.apply(null, datatypeConverter.parseHexString(data));
}

function fizzBuzzSequence() {
  let string = "";
  for (; index < 100; index++) string += fizzBuzzValue(index) + " ";
  return string.substring(0, string.length - 1);
}

function addBuzz() {
  buzzCounter = MULTIPLE_FOR_BUZZ;
  let result = decodeHexValue("42757a7a");
  return result;
}

function addFizz() {
  fizzCounter = 0;
  let result = decodeHexValue("46697a7a");
  return result;
}


function fizzBuzzValue(index) {
  fizzCounter++;
  buzzCounter--;
  const shouldAddFizz = isMultipleOfThree();
  const shouldAddBuzz = isMultipleOfFive();
  const currentNumber = index + 1;
  let string = shouldAddFizz || shouldAddBuzz ? "" : currentNumber;
  if (shouldAddFizz) string += addFizz();
  if (shouldAddBuzz) string += addBuzz();
  return string;
}

module.exports.fizzBuzzSequence = fizzBuzzSequence;

function isMultipleOfFive() {
  return buzzCounter == 0;
}

function isMultipleOfThree() {
  return fizzCounter == MULTIPLE_FOR_FIZZ;
}
