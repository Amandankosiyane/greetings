function showInp() {
    var a = document.getElementById("user_input").value;

    if (document.getElementById('English').checked === true && a.length > 0 && a !== " " && namesGreeted[a] === undefined) {
        namesGreeted[a] = 1;

        document.getElementById('toDisplay').innerHTML = "Hello, " + document.getElementById("user_input").value;
        var container = clickCounter();

    } else if (document.getElementById('IsiXhosa').checked === true && a.length > 0 && a !== " " && namesGreeted[a] === undefined) {
        namesGreeted[a] = 1;

        var container = clickCounter();

        document.getElementById('toDisplay').innerHTML = "Molo, " + document.getElementById("user_input").value;
    } else if (document.getElementById('Afrikaans').checked === true && a.length > 0 && a !== " " && namesGreeted[a] === undefined) {
        namesGreeted[a] = 1;

        var container = clickCounter()

        document.getElementById('toDisplay').innerHTML = "Hallo, " + document.getElementById("user_input").value;
    }
}
