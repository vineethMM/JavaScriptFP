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
