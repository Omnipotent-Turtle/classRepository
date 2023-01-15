var score = 0;
var turns = 0;
//100 turns
for(let turns = 0; turns <= 100; turns++)
{
    if(score > 290)
    {
        break;
    }

    else if(score == 125)
    {
        console.log("Deduction! " + score);
        score = 25;
    }

    else if(turns % 2 === 0)
    {
        score += 5;
       console.log("Turns: " + turns + " Score: " + score);


    } 

    else
    {
        score += 3
        console.log("Turns: " + turns + " score: " + score);
        
   
    }
    
    
}
