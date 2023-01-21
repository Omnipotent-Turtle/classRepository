/*The code blocks below are testing the use of a few Array METHODS. [.map] [.reduce] [.forEach] [.filter] [.splice] */

let names = ['Jack', 'Tom', 'Sally', 'Eric', 'Nicholas'];
let lengths = names.map(function(element){

    return element.length;
});

console.log(lengths);

console.log('map method test complete...')

let sum = lengths.reduce(function(accumulator, currentValue){

    return accumulator + currentValue;

}, 10);

console.log(sum);

console.log('reduce method test complete...')

names.forEach(function(element){
    console.log(element);
})

console.log('for-each method test complete...')

let evens = names.filter(function(element){
    return element.length % 2 == 0;
});

console.log(evens);

console.log('filter method test complete...')

let removedElements = names.splice(1, 1);

console.log(removedElements);