var rng = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

var getPlayerName = function() {
    var name = "";

    while (name == "" || name === null) {
        name = window.prompt("What is your robot's name?");
    }

    return name;
}

// player variables
var playerInfo = {
    name: getPlayerName(),
    hp: 100,
    atk: 10,
    money: 10,

    // object functions
    
    reset: function() {
        this.hp = 100;
        this.atk = 10;
        this.money = 10;
    },
    refillHP: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 coins.");

            // increase hp and decrease coins
            this.hp += 20;
            this.money -= 7;
            
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAtk: function() {
        if (this.money >= 7) {
            window.alert("Upgrade player's attack by 6 or 7 dollars.");

            // increase attack and decrease money
            this.atk += 6;
            this.money -= 7;    
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
}

// enemy variables
var enemyInfo = [
    {
        name: "Roborto",
        hp: 50,
        atk: rng(10, 14)
    },
    {
        name: "Amy",
        hp: 50,
        atk: rng(10, 14)
    },
    {
        name: "Robo Trumble",
        hp: 50,
        atk: rng(10, 14)
    }
]

var fightOrSkip = function() {
    // fight or skip?
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLowerCase();

    // confitional recursive function
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // skip
    if (promptFight === "skip") {
        // skip confirmation
        var confirmSkip = window.confirm("Are you sure you'd like to quit");

        // leave fight when yes
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

            // cost money to skip
            playerInfo.money -= 10;
            return true;
        }
    }

    return false;
}

var fight = function(enemy, i) {
    var playerTurn = true;

    if (Math.random() > 0.5){
        playerTurn = false;
    }
  
    while (enemy.hp > 0 && playerInfo.hp > 0) {
        if (fightOrSkip()) {
            break;
        }
        
        // player attacks enemy
        enemy.hp -= playerInfo.atk;
        console.log(playerInfo.name+" attacked "+enemy.name+". "+enemy.name+" now has "+enemy.hp+" HP.");
        
        // checks enemy HP
        if (enemy.hp <= 0) {
            window.alert(enemy.name + " has died!");

            // award player for beating enemy
            playerInfo.money += 20;

            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.hp + " HP.")
        }

        // enemy attacks player
        playerInfo.hp -= enemy.atk;
        console.log(enemy.name+" attacked "+playerInfo.name+". "+playerInfo.name+" now has "+playerInfo.hp+" HP.");

        // checks player hp
        if (playerInfo.hp <= 0) {
            window.alert(playerInfo.name + " has died! Game over!");
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.hp + " HP.");
        }

        // switch turn order for next round
        playerTurn = !playerTurn;
    }
    
}

// play again
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    for (i = 0; enemyInfo.length; i++) {
        if (playerInfo.hp > 0) {
            window.alert("Welcome to Robot Gladiators! Round "+ (i + 1));

            //enemy.hp = rng(40, 60);

            fight(enemyInfo[i]);

             // if not at the last enemy in the array
            if (playerInfo.hp > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.hp > 0) {
        windows.alert("Great job, you've survived the game! you now have a scare of " + playerInfo.money + ".");
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
    var shopOption = window.prompt ("Would you like to 1 - REFILL your health, 2 - UPGRADE your attack, or 3 - LEAVE the store? Please enter one: '1', '2', or '3' to make a choise.");
    shopOption = parseInt(shopOption);

    switch (shopOption) {
        // refill 
        case 1:
            playerInfo.refillHP();
            
            break;
            
        // upgrade
        case 2:
            playerInfo.upgradeAtk();

            break;
    
        // leave
        case 3:
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

startGame();