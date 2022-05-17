// player variables
var playerName = window.prompt("What is your robot's name?");
var playerHP = 100;
var playerAtk = 10;


// enemy variables
var enemyName = "Roborto";
var enemyHP = 50;
var enemyAtk = 12;

var fight = function() {
    // round start
    window.alert("Welcome to Robot Gladiators");

    // player attacks enemy
    enemyHP -= playerAtk;
    console.log("Player attacks enemy.");

    // enemy attacks player
    playerHP -= enemyAtk;
    console.log("Enemy attacks player.");

    // fight log
    console.log("Player HP: " + playerHP);
    console.log("Enemy HP: " + playerHP);

    checkHP(playerName, playerHP);
    checkHP(enemyName, enemyHP);
}

// check HP
var checkHP = function(Name, HP) {
    if (HP <= 0) {
        window.alert(Name + " has died");
    }
    else {
        window.alert(Name + " still has " + HP + " HP.");
    }
}

fight();