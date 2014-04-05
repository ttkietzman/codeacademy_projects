function rollSingleDie()
{
    return Math.floor(Math.random()*6+1);
}

function Player(name){
    this.name = name;
    var score = 0;
    this.addToScore = function(numScore){
        score += numScore;
    };
    
    this.getScore = function(){
        return score;
    }
    
}
var players = [];

players[0] = new Player(prompt("What is the name of player 1?"));
players[1] = new Player(prompt("What is the name of player 2?"));
players[2] = new Player(prompt("What is the name of player 3?"));
players[3] = new Player(prompt("What is the name of player 4?"));

//Make the rollDice function roll dice, 
//check for doubles, and return the 
//total score achieved by all rolls
function rollDice(player)
{ 
    roll1 = 0;
    roll2 = 0;
    diceTotal = 0;
    
    while(roll1 === roll2){
        roll1 = rollSingleDie();
        roll2 = rollSingleDie();
        diceTotal += (roll1 + roll2);
        console.log("Dice 1: " + roll1 + " Dice 2: " + roll2);
        console.log("Score this round: " + diceTotal);
        player.addToScore(diceTotal);
        console.log("Total score: "+ player.getScore());
        
        if(roll1 === 1 && roll2 === 1){
            console.log("Snake Eyes!");
            return true;
        }
        else if(roll1 === roll2){
            console.log("Congratulations! You Threw Doubles!")
        }
    }
    
    
    
    return false;
    
}
var snakeEyes = false;
var turn = 1;
var highScore = 0;
var winners = [];
var congrats = "Congratulations ";

while(!snakeEyes){
console.log("Turn "+turn);
    for(var x = 0; x < players.length; x++){
        console.log("It is " + players[x].name +"'s roll.");
        snakeEyes = rollDice(players[x]);
        if(snakeEyes){
            break;
        }
    }
turn++
}
for(y = 0; y < players.length; y++){
    if(players[y].getScore() > highScore){
        highScore = players[y].getScore();    
    }
    console.log(players[y].name +  " scored " + players[y]    .getScore());
}
for(z = 0; z < players.length; z++){
    if(players[z].getScore() === highScore){
        winners.push(players[z].name); 
    }
}

for(a = 0; a < winners.length; a++){
    congrats += winners[a];
    if(a > 0){
        congrats += " and " + winners[a];
    }
    
}
congrats += " you have won!";
console.log(congrats);