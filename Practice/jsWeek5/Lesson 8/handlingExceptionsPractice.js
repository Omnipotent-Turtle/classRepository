/* Exceptions can be thought of as errors, because they are exceptions to what is supposed to happen.
Exceptions can be handled using [try] and [catch] blocks to wrap code that communicates with external sources and libraries.
Should not be used for code that said coder can fix on their own. So not all code should be wrapped in said blocks
The argument that [catch()] should take should be the 'err' or Error.

Format is try {exampleCodeBlock} catch (err){codeThatHandlesException}*/

try{
    list.push('Hello');
    
} catch(err){
    console.log(err);
}

console.log('goodbye');

console.log('[try] and [catch] Exception handling test successful if "goodbye" logs to console and error logs to console.')