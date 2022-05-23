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
            var dmg = rng(playerAtk - 3, playerAtk);
            enemyHP -= Math.max(0, dmg);
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
            var dmg = rng(enemyAtk - 3, enemyAtk);
            playerHP -= Math.max(0, dmg);
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

            enemyHP = rng(40, 60);

            fight(enemyNames[i]);

             // if not at the last enemy in the array
            if (playerHP > 0 && i < enemyNames.length - 1) {
                // go to shop confirmation
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                // take player to shop if yes
                if (storeConfirm) {
                    shop();
                }
            }

            else {
                window.alert("You have lost your robot in battle! Game over!")
                break;
            }
        }
    }

    endGame();
}

// end game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    // if player is alive
    if (playerHP > 0) {
        windows.alert("Great job, you've survived the game! you now have a scare of " + playerMoney + ".");
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
    var shopOption = window.prompt ("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choise.");

    switch (shopOption) {
        // refill 
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 coins.");

                // increase hp and decrease coins
                playerHP += 20;
                playerMoney -= 7;
                
            }
            else {
                window.alert("You don't have enough money!");
            }
            
            break;
        // upgrade
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrade player's attack by 6 or 7 dollars.");

                // increase attack and decrease money
                playerAtk += 6;
                playerMoney -= 7;    
            }
            else {
                window.alert("You donn't have enough money!");
            }

            break;
    
        // leave
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            // do nothing
            break;
        // go back to shop to force player to pick valid option
        default:
            window.alert("Did not pick a valid option. Try again.");

            shop();
            break;
    }
}

// rng
var rng = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
}

startGame();