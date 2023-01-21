var loggedIn = false

while (!loggedIn)
{
    let username = prompt('Username:');
    let password = prompt('Password:');
    
if (username == 'bran5000' && password == 'makelake21')
{
    alert('Welcome Back, ' + username);
    loggedIn = true;
}
else
{
    alert('Incorrect Username or Password.');
}

}