/* Javascript is single-threaded, or it only runs one line of code at a time. Becomes a problem when code must be read to
or write to an external program. Javascript could send an HTTP request for example, but then block the other lines of code from running
as the request did not return anything in time, or at all. Can also occur when something is slow. */

/* Callbacks assist with this problem because Javascript is event-driven. It does not wait for
each line of code to finish, it continues to call the next line of code. Means that some values end up null without callbacks, 
as some parts of code don't finish in time. */

/* In essence: A Callback is a function passed into another function to be run and completed by said container function
once container function has completed. Because Javascript treats functions as objects. */

let username = sendHttpRequest('getUser'); /* non-working pseudo code */

console.log(username);

/* code that would be written simply as above, would look like the following under a Callback usage */

function logUsername(user){
    console.log(user);

};

sendHttpRequest('getUser', logUsername);  
/* The logUsername function is being passed into sendHttpRequest function as an object.
Do not invoke the function using [ (); ] */

sendHttpRequest('getUser', user => console.log(user)); 

/* anonymous call using arrow function. Should only be used for one-line single-use code blocks.  */