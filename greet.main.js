function showInp() {
        var firstName = document.getElementById("user_input").value;
        var display = document.getElementById('toDisplay');
        display.innerHTML = greetedNames(firstName, languagesGreeted(), clickCounter);
        var results = document.querySelector('#result');
        results.innerHTML = clickCounter(greetedNames());
        document.getElementById("user_input").value = "";
}
countGreetings();

var clearBtn = document.getElementById("resetButton");
clearBtn.addEventListener("click", clearReset);
