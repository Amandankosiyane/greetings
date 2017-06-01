var display = document.getElementById('toDisplay');
var results = document.querySelector('#result');
var firstName = document.getElementById("user_input");

var namesGreeted = {};
function showInp() {
        if (firstName && namesGreeted[firstName.value] === undefined) {
                namesGreeted[firstName.value] = 1;
                display.innerHTML = greetedNames(firstName.value, languagesGreeted(), clickCounter);
                clickCounter(greetedNames());
        } else if (firstName && namesGreeted[firstName.value] !== undefined) {
                display.innerHTML = greetedNames(firstName.value, languagesGreeted());
        }
        document.getElementById("user_input").value = "";
}

var clearBtn = document.getElementById("resetButton");
clearBtn.addEventListener("click", clearReset);
