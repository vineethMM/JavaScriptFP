// Chapter 4 - Data Structures.
// 
// Arrays
// ======
// Defining an array is straight forward and simple.
//
// var listOfNumbers = [1, 2, 3, 4, 5]
//
// * Array elements can be accessed using `[]`
// 
// console.log(listOfNumbers[0])      -- Array index starts from zero
//  
// * Methods array can be classified into two, mutating and non-mutating.
// 
// listOfNumbers.push(6) 
// 
// * `push` mutates `listOfNumbers` and now it is [1, 2, 3, 4, 5, 6]
//
// listOfNumbers.concat(6) 
//
// * `concat` does not mutate  `listOfNumbers` , instead returns a new array.
// 
// Objects
// ========
// 
// Values of the type object are arbitrary collections of properties, and we can add or remove these properties as we please.
//  
// One way to create an object is by using a curly brace notation.

var day1 = {
   squirrel: false,  // `squirrel` is the label/property name. after `:` comes an expression that forms the value of the property.
   // properties are separated by `,`
   events: ["work", "touched tree", "pizza", "running", "television"]
}     
console.log(day1.squirrel); 
// → false 
console.log(day1.wolf);
// → undefined

// Now add a property `wolf`
day1.wolf = false; 
console.log(day1.wolf);
// → false
//
// Delele property `wolf`
delete  day1.wolf; // `delete` is a unary operator.
console.log(day1.wolf);
// → undefined

// For ways to create an object see the stackoverflow question.
// http://stackoverflow.com/questions/6843951/which-way-is-best-for-creating-an-object-in-javascript-is-var-necessary-befor
//
var journal = [];

function addEntry(events , didITurnIntoASquirrel) { 
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel 
  });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false); 
addEntry(["weekend", "cycling", "break", "peanuts","beer"], true);

// 
// Correlation is a measure of dependence between variables . It is usually expressed as a coefficient 
// that ranges from -1 to 1. Zero correlation means the variables are not related, whereas a correlation 
// of one indicates that the two are perfectly related—if you know one, you also know the other. 
// Negative one also means that the variables are perfectly related but that they are opposites—when one is true, 
// the other is false.
// 
//  here we are usiung Phi coefficient (https://en.wikipedia.org/wiki/Phi_coefficient)
// 
// [76, 9, 4, 1]

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
     Math.sqrt(
      (table[2] + table[3]) * 
      (table[0] + table[1]) * 
      (table[1] + table[3]) * 
      (table[0] + table[2])
    );
}


// Using objects as Maps
var map = {}; // creates an empty object
function storePhi(event , phi) {
  map[event] = phi;  // add a property `event` to the object `map`
}

// To iterate through all the events(or keys) in the map.
for(var event in map){
  console.log("The correlation for '" + event + "' is " + map[event]);
}


function hasEvent(event , entry) {
  return entry.events.indexOf(event) != -1;
}
 
function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for(var i = 0; i < journal.length; i++){
    var entry = journal[i];
    var index = 0;
    if(hasEvent(event, entry)) index += 1;
    if(entry.squirrel) index += 2;

    table[index] += 1;
  }

  return table 
}

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i]; 
      if (!(event in phis))
        phis[event] = phi(tableFor(event , journal)); 
    }
  }

  return phis; 
}

var correlations = gatherCorrelations(journal);

// The sum of a range
// 
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers 
// from start up to (and in- cluding) end. Next, write a sum function that takes an array of numbers and returns 
// the sum of these numbers. Run the previous program and see whether it does indeed return 55.
// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” 
// value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding 
// to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with 
// negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
function range(start, end, step){
  step = (step == undefined ? 1 : step) ;

  var count = Math.abs(end - start)
  var result = [];
  for (var i = 0; i <= count; i ++) {
      result.push(i * step + start);
  }

  return result;
}

// *** Reversing an array ***

// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. 
// For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes 
// an array as argument and produces a new array that has the same elements in the inverse order. The second, 
// reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order 
// to reverse its elements. Neither may use the standard reverse method.
// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you 
// expect to be useful in more situations? Which one is more efficient?

function reverseArray(inputArray) {
  var reversedArray = [];

  for(var i = inputArray.length -1; i >= 0; i--){
    reversedArray.push(inputArray[i]);
  }

  return reversedArray;
}

function reverseArrayInPlace(inputArray) {
  var temp;
  for(var leftIndex = 0, rightIndex = inputArray.length - 1; leftIndex <= rightIndex; leftIndex++, rightIndex--){
    temp = inputArray[rightIndex];
    inputArray[rightIndex] = inputArray[leftIndex];
    inputArray[leftIndex] = temp;
  }

  return inputArray;
}

// First variant (`reverseArray`) will be more useful since it has no side effetcts and the programs use it will be 
// more easy to reason about.
// In terms of efficiency, second version will be better since it does not require more memory to be allocated
// for reversed array.


// *** List ***


// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument,
// and write a listToArray function that produces an array from a list. Also write the helper functions prepend, 
// which takes an element and a list and creates a new list that adds the element to the front of the input list, 
// and nth, which takes a list and a number and returns the element at the given position in the list, or undefined 
// when there is no such element. If you haven’t already, also write a recursive version of nth.

function arrayToList(inputArray) {
  // intialise list to first element of array
  var resultList = inputArray.length > 0 ? {value: inputArray[0], rest: null} : {};
  var curr =  resultList;
  for(i = 1 ; i < inputArray.length; i++) {
    curr.rest = {
      value: inputArray[i],
      rest: null
    }

    curr = curr.rest;
  }
   
  return resultList;
}

function prepend(inputList, element) {
  return {value: element, rest: inputList};
}

function nth(inputList, index) {
  var element = undefined 

  if(index > 1  && inputList.rest != null) {
    element = nth(inputList.rest, index - 1)
  }

  if(index == 1){
    element = inputList.value;
  }

  return element;
}

// *** Deep comparison ***
// 
// The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.
// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same 
// properties whose values are also equal when compared with a recursive call to deepEqual.
// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can 
// use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly 
// exception into account: by a historical accident, typeof null also produces "object".

function deepEqual(left, right) {
  if(typeof left == 'object' && typeof right == 'object' && left != null && right != null){
    var leftKeys = Object.keys(left);
    var rightKeys = Object.keys(right);

    if(leftKeys.length != rightKeys.length){
      return false;
    }
    
    for(var property in left){
      if(!(property in right && deepEqual(left[property], right[property])))  {
        return false;
      } 
    }
    
    return true;
  } else {
    return  left == right;
  }
}
