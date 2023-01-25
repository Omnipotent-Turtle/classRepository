const myString = `Hello world,
this was made
using a 
template literal concatenation`

console.log(myString);

var myString1 = `This math problem of`

console.log(`${myString1} five times ten, of which the answer is ${(5 * 10)} was solved using interpolation 
as well as template literals!`)

/*The code above is utilizing "interpolation" or the running of javascript code within a template literal, by using
 [${}] */


/* ES6 update for Javascript introduced new commands for [var] declaration. Those new declarations are [const] and [let]
[const] is used to set a variable that cannot be overwritten later. Good for preventing accidental changes.
[let] is used to declare a variable within a code block, regardless of any previously declared variable names. */

const var1 = 'variable 1';

console.log(var1);


/*The above code should have printed only the 'variable 1' string, then throw an error for the 'random variable string' 
found on line 27 after the next code block runs*/

var x = 'five';

console.log(x);

function myFunction(){for(let x = 0; x <= 5; x++){
    console.log(x);
}}

myFunction();

/* The above code block should have printed the string variable 'five', as well as counted to 5 using the for loop.
This indicates that the [let] declaration causes variables to be temporarily contextualized for its individual code block and not
before or after. */

var1 = 'random variable';

/* code does not run beyond this point until the conflict with [const] variable at line 5 is reconciled. */

