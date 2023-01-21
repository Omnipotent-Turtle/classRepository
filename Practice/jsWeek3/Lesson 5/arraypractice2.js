var customerNames = [];
customerNames.push('Jane Doe');
customerNames.push('John Wick');

for (let i = 0; i < customerNames.length; i++)
{
    console.log(customerNames[i]);
}

for (name of customerNames)
{
    console.log(name);
}