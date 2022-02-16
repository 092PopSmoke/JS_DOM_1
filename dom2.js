var password = "DeezNuts";
var opp = 4;
document.getElementById('enter').addEventListener('click', function() {
    while (opp > 0) {
        var pass = document.getElementById("passord").value;
        opp--;
        if (pass == password) {
            document.getElementById("welcome").innerHTML = ("Du har logget inn");
            document.getElementById("enter").style.visibility = "hidden";
            document.getElementById("tries").style.visibility = "hidden";
        }
        if (opp >= 0) {
            document.getElementById("tries").innerHTML = ("Du har " + opp + " igjen.");
            break;
        }
    }

    if (opp == 0) {
        document.getElementById("result").innerHTML = ("Konto har blitt låst, ring for videre hjelp");

    }
});