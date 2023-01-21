 function myFunction(){
    for(let i = 0; i < 100; i++){

        if(i % 2 == 0)(
            console.log(i)
        )
        
    }
}

myFunction();

function createFullName(firstName, lastName){
    return `${firstName} ${lastName}`;
    
}


var fullName = createFullName('Tom', 'Sawyer');
console.log(`Welcome ${fullName}`);


/*Beneath this point is an experimental login system. Above is a successful assignment for function practice.

let loggedIn = false;

function getCredentials() {
    
    while(!loggedIn){
    let username = prompt ('Username');
    let password = prompt ('Password');

    if(username == 'Chicken' && password == 'Egg') {

        var loggedIn = true;
        return `${username} ${password} is hatching!!!`
    }

    else{
        alert('Hint: A (fowl) is (laying something)')
    }
} }

var confirmCredentials = getCredentials();

console.log(confirmCredentials);

alert(confirmCredentials); */