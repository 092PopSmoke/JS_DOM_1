function myFunction() {

    var høyde = prompt("Skriv høyden av rektangel. CM");
    var lengde = prompt("Skriv lengden av rektangel. CM");


    var perimeter = (2 * høyde) + (2 * lengde);
    var area = høyde * lengde;
    var volume = høyde * lengde;

    document.getElementById("a").innerHTML =
        "Arealet av rektangel:" + area;
    document.getElementById("p").innerHTML =
        "Omkretsen av rektangel:" + perimeter;
}