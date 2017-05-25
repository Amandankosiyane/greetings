function languages(names, checkedLanguages) {
    if (checkedLanguages === 'english') {
        return "Hello, " + names;
    }

     if (checkedLanguages === 'xhosa') {
        return "Molo, " + names;
    }
    
    return "Hallo, " + names;
}
