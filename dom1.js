
document.getElementById("butt").addEventListener("click", function () {



    var breddeValuta = document.getElementById("leng").value;

    var høydeValuta = document.getElementById("høyd").value;

    var Alani = document.getElementById("rektCanvas");



    var ctx = Alani.getContext("2d");

    ctx.fillStyle = "#FFFFFF";

    ctx.fillRect(breddeValuta, høydeValuta, breddeValuta, høydeValuta);



});