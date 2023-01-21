for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('FOR LOOP TEST COMPLETE');

for (let i = 0; i < 20; i++) {
    
    if(i % 2 == 0){
        console.log(i)
    }

}

console.log('FOR-IF LOOP COND. COMPLETE');

let names = ['Bob', 'Carla', 'Joey'];

for (i in names){

    console.log(names[i]);
}

console.log('FOR-IN LOOP TEST COMPLETE');

for (name of names){

    console.log(name);
}

console.log('FOR-OF LOOP TEST COMPLETE');

let a = 0;

while(a < 10){
    console.log(a);
    a++
}

console.log('WHILE LOOP TEST COMPLETE');


do{
    console.log(a);
} while (a < 10)

console.log('DO-WHILE LOOP TEST COMPLETE');