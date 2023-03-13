// * task 1
var array = [1, 2, 3, 4, 5]

console.log(array.filter(element => element % 2 == 0)
                 .reduce((sum, element) => sum + Math.sqrt(element), 0));

// * task 2

var arraySecond = []
var firstValue = 3
var secondValue = 'a'

function arraySecondNew(firstValue, secondValue) {
  for(firstValue; firstValue > 0; firstValue--){
    arraySecond.push(secondValue)
  }
  return arraySecond
}

console.log(arraySecondNew(firstValue, secondValue));

// * task 3

var arrayUnfolds = [1, 2, 3]
var arrayUnfoldsNew = array => array.map((_item, index, newArr) => newArr[newArr.length - 1 - index]);

console.log(arrayUnfoldsNew(arrayUnfolds));

// * task 4

var arrayCleanses = [0, 1, false, 2, undefined, '', 3, null]

var arrayCleansesNew = arrayCleanses.filter(
  item =>
    !(item==false) &&
    !(item==undefined) &&
    !(item=='') &&
    !(item==0) &&
    !(item==null))

console.log(arrayCleansesNew);

// * task 5

var arrayFifth = [['a', 1], ['b', 2]]

var arrayFifthNew = array => {
  var obj = {};
  for(let i = 0; i < array.length; i++) {obj[array[i][0]] = array[i][1];}
  return obj;
}

console.log(arrayFifthNew(arrayFifth));

// * task 6

var arrayCleansUp = [1, 2, 3, 1, 2]

var arrayCleansUpNew = arrayCleansUp.filter(function(el, id) {
  return arrayCleansUp.indexOf(el) == id;
});

console.log(arrayCleansUpNew);

// * task 7

var arrayCompares = [1, 2, 3]
var arrayComparesIdentical = [1, 2, 3]

var isEqual = (arrayCompares, secondArray) => {
  if ( !(arrayCompares.length == secondArray.length)) {
  return false;
  }

var compared = arrayCompares.map((el, id) => arrayComparesIdentical[id] === el);
  return !compared.includes(false);
};

console.log(isEqual(arrayCompares, arrayComparesIdentical));

// * task 8

var arrayConverts = [1, 2, [3, 4, [5]]]

var arrayConvertsNew = (array) => array.reduce((acc, item) => acc.concat(Array.isArray(item) ? arrayConvertsNew(item) : item),[]);

console.log(arrayConvertsNew(arrayConverts));

// * task 9

var arrayShares = [1, 2, 3, 4, 5]
var size = 2
var arraySharesNew = []

for (let i = 0; i<arrayShares.length; i += size) {
  arraySharesNew.push(arrayShares.slice(i, i + size));
}

console.log(arraySharesNew);

// * task 10

var str = 'Пример строки';

function capitalizeFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

document.writeln(capitalizeFirstLetter(str));


















