function clickCounter() {
        if (typeof(Storage) !== "undefined") {
                if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount) + 1;
                } else {
                        localStorage.clickcount = 1;
                }
                return localStorage.clickcount;
        } else {
                return "Sorry, your browser does not support web storage...";
        }
}
