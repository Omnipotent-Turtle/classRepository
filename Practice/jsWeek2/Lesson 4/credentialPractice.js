/*

let username = prompt ('Username:');
let password = prompt ('Password:');

if(username == 'Bran123' && password == '12345'){
    alert('Welcome back ' + username);
} else{
    alert (`Sorry "${username}" `+'Wrong username or password');
}
*/



var loggedIn = false;

while(!loggedIn){

let username = prompt ('Username:');
let password = prompt ('Password:');

if(username == 'Bran123' && password == '12345'){
    alert('Welcome back ' + username);
    loggedIn = true;
} else{
    alert (`Sorry "${username}" `+'You are the wrong person...');
}

}