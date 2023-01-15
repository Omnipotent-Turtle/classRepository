const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    //more customers with the same schema
 ]; 
 //Name must start with a c, upper or lower
//customer.name[0] == ('c' || 'C');

let temp = customers.name[0].toLowerCase();
if(temp != 'c');
{
 //filter out, not correct client
 console.log("doesn't start with a C");
}

else if (customers.address.state != 'AZ' || customers.address.city != 'Peoria' )
 {
     // filter out, not correct client
     console.log("Not right state or city");
 }

 else if (CustomElementRegistry.membershipLevel != 'GOLD' || CustomElementRegistry.membershipLevel != 'PLAT' || customers.age < 29 && customers.membershipLevel != 'SILVER')
 {
  //filter out, not correct client
 }

 else if (typeof customers.address.street === undefined || typeof customers.address.zip ===undefined)
 {
     //filter out, not correct client
 }

 else
 {
    console.log("Include");
 }

 //address cannot be undefined

 //membership gold or plat,

 //can be silver if 29

