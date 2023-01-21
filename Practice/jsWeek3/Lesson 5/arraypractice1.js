var customerNames = [];

customerNames.push('John Smith');
customerNames.push('Jane Doe');
customerNames.push('Issa Rae');

for (let i = 0; i < customerNames.length; i++ ){

    console.log(customerNames[i]);
}

console.log('Array Practice on full For loop complete...')

for (name of customerNames){
    console.log(name);
}

console.log('Array Practice complete on For-of Loop.' + 'Used name as variable instead of "i" for index')