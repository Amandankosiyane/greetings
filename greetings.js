function languagesGreeted() {
        if (document.getElementById('English').checked === true) {
                return 'english';
        } else if (document.getElementById('IsiXhosa').checked === true) {
                return 'xhosa';
        } else if (document.getElementById('Afrikaans').checked === true) {
                return 'afrikaans';
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
}
