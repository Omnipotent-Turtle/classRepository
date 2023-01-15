var ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(84, 41);
var sum = 0;

console.log(ages[ages.length - 1] - ages[ages.length - ages.length]); 

for(let i = 0; i < ages.length; i++){
    sum += ages[i];

}

console.log(sum / ages.length);

var names = ["Sam", "Tommy" , "Tim", "Sally", "Buck", "Bob"];
let allNames = '';
for(let i = 0; i < names.length; i++)
{
    // if i is 0 dont add a space
    allNames = allNames + ' ' + names[i];    
console.log(allNames);
}

var nameLengths = [];

for(let i = 0; i < names.length; i++)
{
  nameLengths.push(names[i].length);

}

var characterCounter = names.map(function(element){
 return element.length;

});

console.log(characterCounter)

var characterAverage = characterCounter.reduce(function(acc, cv){

    return acc + cv;

})



//console.log(characterAverage);

//Number 3 array access example
//let array = [4, 8, 12, 16]

//First element access example
//let a = array[array.length - array.length;]

//Last element access example
//let b = array[array.length - 1];

function twoParameters(word, n){
    let paraNumbers = " "
    let i = 0

    while(i < n )
    {
        i++
        paraNumbers = paraNumbers + word;
    }
 return paraNumbers;   
}

console.log(twoParameters("Bacon", 3))


function surname(firstName, lastName)
{
    
        return firstName + " " + lastName;

}

console.log(surname("James", "Bond"));

let newSum = 0;
function toOneHundred()
{
    let newArray = [20, 5, 8, 32, 48, 36];

    for (let i = 0; i < newArray.length; i++){

        newSum += newArray[i];

        if(newSum >= 100)
        {
            return newSum >= 100;

        }
    }

    console.log(newSum);

}

toOneHundred();


function averageArray()
{
let newAverage = 0;
let anotherArray = [1, 2, 3, 4];

    for(let i = 0; i < anotherArray.length; i++)
    {

    newAverage = newAverage + anotherArray[i];

    }

    return newAverage / anotherArray.length;
}

console.log(averageArray());

function dualArray()
{
    let arrayOne = [20, 22, 86];

    let arrayTwo = [5, 3, 12];


    let averageOne = 0;

    for(a = 0; a < arrayOne.length; a++)
    {
        averageOne = averageOne + arrayOne[a] / arrayOne.length;
    }

    console.log(averageOne);

    let b = 0;
    let averageTwo = 0;
    for(b = 0; b < arrayTwo.length; b++)
    {
        averageTwo = averageTwo + arrayTwo[b] / arrayTwo.length;

    }

    console.log(averageTwo);


    
    if(averageOne > averageTwo)
    {
        console.log(averageOne > averageTwo);

    }

}

dualArray();

function willBuyDrink(isHotOutside, moneyInPocket)
{
    

    if(isHotOutside = true && moneyInPocket >= 10.50 || isHotOutside != true && moneyInPocket < 10.50)
    {
        return isHotOutside && moneyInPocket;

    }

    

}

willBuyDrink(true, 10.50);

function myOwnFunction()
{
   let luckyNumbers = [];
   luckyNumbers.push(23, 19 ,17, 57, 48, 82, 97, 68, 32, 54, 78);

   let firstPrizeNumbers = [];
   let secondPrizeNumbers = [];
   let goesFirst = false;

    console.log("Our lucky numbers are" + " " + luckyNumbers + "!")
   //loop to push numbers of 50 and higher to first prize numbers

   for(i = 0; i < luckyNumbers.length; i++)
   {

        if(luckyNumbers[i] >= 50)
        {

            firstPrizeNumbers.push(luckyNumbers[i]);
            console.log(`The first place prize winners are ${firstPrizeNumbers}!!!`);
            goesFirst = true;


        }


   }

   for(let i = 0; i < luckyNumbers.length; i++)
   {

    if(luckyNumbers[i] < 50)
    {
        secondPrizeNumbers.push(luckyNumbers[i]);
        console.log(`Consolation prize winners are ${secondPrizeNumbers}~`);
        goesFirst = false;

    }


   }


   //set goesFirst to true if over 50

}


myOwnFunction();
 //This Function is used to split a lottery into two groups of winners and can be split into more groups, and can be used dynamically.




