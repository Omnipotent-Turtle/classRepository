//Deck that has 4 card suites and 13 numbers

/*class PlayerOne { constructor(){

    this.playerHandOne



}


} */


class Deck  { constructor (){

    this.suites = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
    this.cardNumbers = ['Ace', '2','3', '4', '5', '6', '7', '8', '9', '10','Jack','Queen','King']
    this.deck = []

}

    deckCompiler (){

        

        for (let suite of this.suites){
        

            console.log(suite);

            for(let i = 0; i < this.cardNumbers.length; i++)
            {
               this.deck.push(` ${suite} ${this.cardNumbers[i]}`);
    
            }
        }

        console.log(this.deck);

    }

    shuffler(){
        var currentIndex = this.deck.length, randomIndex;
    
        while(currentIndex != 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex --;
    
            [this.deck[currentIndex], this.deck[randomIndex]] = [this.deck[randomIndex], this.deck[currentIndex]];
    
        }

        console.log(this.deck);
    
        return this.deck;
    
    
    }

    
}




let cardDeck = new Deck();
cardDeck.deckCompiler(); 
cardDeck.shuffler();

var playerHandOne = [];
var playerHandTwo = [];

console.log(cardDeck);
console.log(cardDeck.shuffler());

function deckDraw(){
        
   playerHandOne = cardDeck.deck.slice(0,26);
   playerHandTwo = cardDeck.deck.slice(26, 52);

console.log(`Player One: Your new hand is ${playerHandOne}`);
console.log(`Player Two: your new hand is: ${playerHandTwo}`);

    
}

deckDraw();

function cardComparison(){

    let winner = false;

        console.log(playerHandOne[0]);
        console.log(playerHandTwo[0]);

        if(playerHandOne > playerHandTwo)
        {
            console.log(`Congratulations Player One! The${playerHandOne[0]} has secured your win!`);
            winner = true;

        }

        else if(playerHandTwo > playerHandOne)
        {
            console.log(`Congratulations Player Two! The${playerHandTwo[0]} has secured your win!`)
            winner = true;

        }

        else if(playerHandOne = playerHandTwo)
        {
            console.log("Ahh, looks like we've got a draw, fellas...");
            winner = false;

        }

}

cardComparison();


//Method that shuffles Deck

//Function that deals cards to players


//Player Hands


//Function that compares card values */


//console.log(`Player one: Your new hand is ${playerHandOne}`);
//console.log(`Player two, your new hand is: ${playerHandTwo}`);
