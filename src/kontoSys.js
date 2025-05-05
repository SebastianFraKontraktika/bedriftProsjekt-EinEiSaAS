function submit() {
    let brukNavn = document.getElementById("bNavn").value;
    let passord = document.getElementById("pOrd").value;
    localStorage.setItem(brukNavn, passord)
}

function logg() {
    for (var i = 0; i < localStorage.length; i++){
        let loggBruker = document.getElementById("loggBruk").value;
        let loggPass = document.getElementById("loggPass").value;
        let bruker = localStorage.key(i)
        console.log(bruker)
        console.log(localStorage.getItem(bruker))
        if (loggBruker == bruker && loggPass == localStorage.getItem(bruker)) {
            console.log("hurra")
            break
        } else {
            console.log("feil")
        }

    }

}