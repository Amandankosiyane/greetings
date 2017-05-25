var display = document.querySelector('#toDisplay');
var name = document.querySelector("#user_input").value;
var english = document.querySelector('#English');
var xhosa = document.querySelector('#IsiXhosa');
var afrikaans = document.querySelector('#Afrikaans');
function showInp() {

    if (english.checked === true && name.length > 0 && name !== " " && namesGreeted[name] === undefined) {
        namesGreeted[name] = 1;

        display.innerHTML = "Hello, " + name;
        clickCounter();

    } else if (xhosa.checked === true && name.length > 0 && name !== " " && namesGreeted[name] === undefined) {
        namesGreeted[name] = 1;

        clickCounter();

        display.innerHTML = "Molo, " + name;
    } else if (afrikaans.checked === true && name.length > 0 && name !== " " && namesGreeted[name] === undefined) {
        namesGreeted[name] = 1;

        clickCounter()

        display.innerHTML = "Hallo, " + name;
    }
    //..............................
    else if (english.checked === true && name.length > 0 && name !== " " && namesGreeted[name] !== undefined) {
        display.innerHTML = "Hello, " + name + " Welcome back";
    } else if (xhosa.checked === true && name.length > 0 && name !== " " && namesGreeted[name] !== undefined) {
        display.innerHTML = "Molo, " + name + " Wamkelekile kwakhona";
    } else if (afrikaans.checked === true && name.length > 0 && name !== " " && namesGreeted[name] !== undefined) {
        display.innerHTML = "Hallo, " + name + " Welkom terug"
    }
    document.getElementById("user_input").value = "";
}
