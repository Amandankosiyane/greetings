var counting = document.querySelector('#count');
//var clicks = Number(localStorage.getItem('currentNumberOfGreetings'));
//document.getElementById('count').innerHTML = 'Greeted: ' + clicks;
var namesGreeted = {};
for (var i = 0; i < namesGreeted.length; i++) {

}

function showInp() {
    var a = document.getElementById("user_input").value;

    if (document.getElementById('English').checked === true && a.length > 0 && a !== " " && namesGreeted[a] === undefined) {
        namesGreeted[a] = 0;

        document.getElementById('toDisplay').innerHTML = "Hello, " + document.getElementById("user_input").value;
        var container = clickCounter();

    } else if (document.getElementById('IsiXhosa').checked === true && a.length > 0 && a !== " " && namesGreeted[a] === undefined) {
        namesGreeted[a] = 0;

        var container = clickCounter();

        document.getElementById('toDisplay').innerHTML = "Molo, " + document.getElementById("user_input").value;
    } else if (document.getElementById('Afrikaans').checked === true && a.length > 0 && a !== " " && namesGreeted[a] === undefined) {
        namesGreeted[a] = 0;

        var container = clickCounter()

        document.getElementById('toDisplay').innerHTML = "Hallo, " + document.getElementById("user_input").value;

    }
    //------------------------------------------------------------------------------------------------------------------------
    else if (document.getElementById('English').checked === true && a.length > 0 && a !== " " && namesGreeted[a] !== undefined) {


        document.getElementById('toDisplay').innerHTML = "Hello, " + document.getElementById("user_input").value + " Welcome back";


    } else if (document.getElementById('IsiXhosa').checked === true && a.length > 0 && a !== " " && namesGreeted[a] !== undefined) {




        document.getElementById('toDisplay').innerHTML = "Molo, " + document.getElementById("user_input").value + " Wamkelekile kwakhona";
    } else if (document.getElementById('Afrikaans').checked === true && a.length > 0 && a !== " " && namesGreeted[a] !== undefined) {




        document.getElementById('toDisplay').innerHTML = "Hallo, " + document.getElementById("user_input").value + " Welkom terug"
    }



    document.getElementById("user_input").value = "";

}
clickCounter()

var b = document.getElementById("resetButton");
b.addEventListener("click", clearReset);

clearReset()
