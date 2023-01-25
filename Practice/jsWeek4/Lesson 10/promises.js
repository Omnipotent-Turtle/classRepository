/* While Callbacks are still used in code at the time of notation, Promises are becoming more prominent.
Promises use a [.then] and [.catch] method to either perform an action when asynchronous code returns a success
or to "catch" an error and perform another action upon failure. */

doSomethingThatReturnsAPromise()
.then((value) => {
    console.log(value);
}).catch((err)=> {
    console.error(err);
});

/* Above is a Promise return example format using an arrow method that was passed into the [.then] method and [.catch] 

Below this is a version that uses non-anonymous function names, and functions that can be re-used with a pass-in.*/

function handleEvent(value){
    console.log(value);
}

function handleError(err){
    console.error(err);
}

doSomethingThatReturnsAPromise()
.then(handleEvent)
.catch(handleError);
