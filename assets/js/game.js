    // player variables
    var playerName = "Test";//window.prompt("What is your robot's name?");
    var playerHP = 100;
    var playerAtk = 10;
    var playerMoney = 10;


    // enemy variables
    var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    var enemyHP = 50;
    var enemyAtk = 12;

var fight = function(enemyName) {
    // attack function
    var attack = function(attackerName, attackerAtk, opponentName, opponentHP) {
        opponentHP -= attackerAtk;
        console.log(attackerName + " attacked " + opponentName + ". " + opponentName + " now has " + opponentHP + ".");

        // checks HP
        if (opponentHP <= 0) {
            window.alert(opponentName + " has died");
        }
        else {
            window.alert(opponentName + " still has " + opponentHP + " HP.");
        }
    }

    // round start
    window.alert("Welcome to Robot Gladiators");

     // check if player wants to fight
    var promptFight = window.prompt("FIGHT or SKIP this battle. Enter 'FIGHT' or 'SKIP' to choose.")

   
    if (promptFight === "fight" || promptFight === "FIGHT") {
        while (enemyHP > 0) {    
            // player attacks enemy
            enemyHP -= playerAtk;
            console.log(playerName+" attacked "+enemyName+". "+enemyName+" now has "+enemyHP+" HP.");
            
            // checks enemy HP
            if (enemyHP <= 0) {
                window.alert(enemyName + " has died!");
            }
            else {
                window.alert(enemyName + " still has " + enemyHP + " HP.")
            }

            // enemy attacks player
            playerHP -= enemyAtk;
            console.log(enemyName+" attacked "+playerName+". "+playerName+" now has "+playerHP+" HP.");

            // checks player hp
            if (playerHP <= 0) {
                window.alert(playerName + " has died!");
            }
            else {
                window.alert(playerName + " still has " + playerHP + " HP.");
            }
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        console.log(playerName + " has chosen to skip the fight!");

        // skip confirmation
        var confirmSkip = window.prompt("Are you sure you'd like to quit? Type 'Y' or 'N'");
        if (confirmSkip === "Y" || confirmSkip === "y"){
            window.alert(playerName + " has skipped the fight. Goodybye!");
            playerMoney -= 2;
        }
        else {
            fight();
        }
    }
    else {
        window.alert("Choose a valid option. Try again.");
        fight();
    }
}

// fight();
for(var i = 0; i < enemyNames.length; i++) {
    debugger;
    // fight enemies
    fight(enemyNames[i])
  }