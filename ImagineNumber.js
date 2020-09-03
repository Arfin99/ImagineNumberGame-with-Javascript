var totalWin = 0;
var totalLost = 0;


for (var i = 0; i < 8; i++) {
    var imagineNum = parseInt(prompt("Imagine a Number from 1 to 14 : "));
    var randomNum = Math.floor(Math.random() * 14) + 1;

    if (imagineNum == randomNum) {
        document.write("Step "+i+": You won<br/>");
        totalWin++;
    }

    else {
        document.write("Step "+i+": You lost and the Imagine number is :" + randomNum+"<br/>");
        totalLost++;
    }

}

document.write("You win " + totalWin + " times<br/>");
document.write("You lost " + totalLost + " times<br/>");

if (totalWin > totalLost) {
    document.write("Your Winning percentage is Higher, CONGRATS !! <br/> ");
}

else {
    document.write("Your defeating pertentage is Higher ,Try Next!!");
}
