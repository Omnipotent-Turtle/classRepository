var dvdPlayer = {

    height: 6,
    width: 12,
    weight: 7,
    depth: 12,
    color: 'pink',
    dvdName: 'Maverick',
    
    printDVDName: function(){
        console.log(this.dvdName);
    
    }
};

console.log(dvdPlayer.weight);

dvdPlayer.printDVDName();

let groceryItems = ['cabbage','milk','eggs'];

for(let i = 0; i < groceryItems.length; i++) {

    console.log(groceryItems[i]);
};


