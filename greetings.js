function languagesGreeted() {
        if (document.getElementById('English').checked ) {
                return 'english';
        } else if (document.getElementById('IsiXhosa').checked ) {
                return 'xhosa';
        } else if (document.getElementById('Afrikaans').checked) {
                return 'afrikaans';
        } else if (document.getElementById('English').checked === true) {
                return "english" + names + "welcome back";
        }else if (document.getElementById('IsiXhosa').checked === true) {
                return "xhosa" + names + "wamkelekile kwakhona";
        }else if (document.getElementById('Afrikaans').checked === true) {
                return "afrikaans" + names + "welkom terug";
        }
}


function greetedNames(names, checkedLanguages) {
        if (checkedLanguages === 'english') {
                return "Hello, " + names;
        }

        if (checkedLanguages === 'xhosa') {
                return "Molo, " + names;
        }

        if (checkedLanguages === 'afrikaans') {
                return "Halo, " + names;

        }
        else if(checkedLanguages === 'english'){
                return "Hello, " + names + "welcome back";
        }
        else if(checkedLanguages === 'xhosa'){
                return "Molo, " + names + "wamkelekile kwakhona";
        }
        else if (checkedLanguages === 'afrikaans') {
                return "Halo, " + names + "welkom terug";
        }
}
