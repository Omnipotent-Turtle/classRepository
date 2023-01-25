/* One line arrow functions do not need curly braces to contain the code block. But if it's more than one line, or 
if it has a [return] key word, then it will need them. Arrow functions can clean up code and shorten function writing.
Otherwise, in the first [const] example, the variables ${firstName} and ${lastName} are already returned implicitly */

const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

let someFunction = (a, b) => {
  let result = '';

    for(let i = 0; i < b; i++){

        result += a
    }

    return result;

}

console.log(createFullName("Jack", "Skellington"));

console.log(someFunction('Hello', 3));

/* [+=] is a concise method to add the value from the right side of the equation to the left side and assign them to a variable, 
or a "container" for later use. In the above arrow function, I created the "result" variable as an empty string so that it could
contain and display the results of the passed in parameters of 'Hello' and 3 */

