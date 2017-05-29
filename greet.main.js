var namesGreeted = {};

function showInp() {
        var firstName = document.getElementById("user_input").value;
        document.getElementById('toDisplay').innerHTML = greetedNames(firstName, languagesGreeted(), clickCount);
}
document.getElementById("user_input").value = "";
}

// function countNamesGreeted(name){
//         if(namesGreeted[name] === undefined){
//                 namesGreeted[name] = 1;
//         }
//          countNamesGreeted();
// }

var clearBtn = document.getElementById("resetButton");
clearBtn.addEventListener("click", clearReset);
