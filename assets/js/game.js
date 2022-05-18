    // player variables
    var playerName = "Test";//window.prompt("What is your robot's name?");
    var playerHP = 100;
    var playerAtk = 10;
    var playerMoney = 10;


    // enemy variables
    var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    var enemyHP = 50;
    var enemyAtk = 12;

var fight = function(enemyName, i) {
     // check if player wants to fight
    var promptFight = window.prompt("FIGHT or SKIP this battle. Enter 'FIGHT' or 'SKIP' to choose.");

   
    if (promptFight === "fight" || promptFight === "FIGHT") {
        while (enemyHP > 0 && playerHP > 0) {    
            // player attacks enemy
            enemyHP -= playerAtk;
            console.log(playerName+" attacked "+enemyName+". "+enemyName+" now has "+enemyHP+" HP.");
            
            // checks enemy HP
            if (enemyHP <= 0) {
                window.alert(enemyName + " has died!");

                // award player for beating enemy
                playerMoney += 20;

                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHP + " HP.")
            }

            // enemy attacks player
            playerHP -= enemyAtk;
            console.log(enemyName+" attacked "+playerName+". "+playerName+" now has "+playerHP+" HP.");

            // checks player hp
            if (playerHP <= 0) {
                window.alert(playerName + " has died! Game over!");
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHP + " HP.");
            }
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        console.log(playerName + " has chosen to skip the fight!");

        // skip confirmation
        var confirmSkip = window.confirm("Are you sure you'd like to quit? Type 'Y' or 'N'");
        if (confirmSkip){
            window.alert(playerName + " has skipped the fight. Goodybye!");
            playerMoney -= 2;
        }
        else {
            fight(enemyNames[i], i);
        }
    }
    else {
        window.alert("Choose a valid option. Try again.");
        fight(enemyNames[i], i);
    }
}

// play again
var startGame = function() {
    // reset player stats
    playerHP = 100;
    playerAtk = 10;
    playerMoney = 10;

    for (i = 0; enemyNames.length; i++) {
        if (playerHP > 0) {
            window.alert("Welcome to Robot Gladiators! Round "+ (i + 1));

            enemyHP = 50;

            fight(enemyNames[i])
        }
        else {
            window.alert("You have lost your robot in battle! Game over!")
            break;
        }
    }

    endGame();
}

// end game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    // if player is alive
    if (playerHP > 0) {
        windows.alert("Great job, you'vve survived the game! you now have a scare of " + playerMoney + ".");
    }
    else {
        windows.alert("You've lost your robot in life");
    }

    // play again?
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon.");
    }
}

// shop
var shop = function() {
    // refill 

    // upgrade

    // leave
}

startGame();