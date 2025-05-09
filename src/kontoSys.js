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
            let kontoKp = document.getElementById("kontoKp")
            let innloggKp = document.getElementById("innlogging")
            kontoKp.style.display = 'block'
            innloggKp.style.display = 'none'
            break
        } else {
            console.log("feil")
        }

    }

}

function visLogg() {
    let B = document.getElementById("brukerSys");
    let P = document.getElementById("passordSys");
    if (P.style.display === 'none') {
        P.style.display = 'block';
        B.style.display = 'none';
    } else {
        P.style.display = 'none';
    }
}

function visBruk() {
    let B = document.getElementById("brukerSys");
    let P = document.getElementById("passordSys");
    if (B.style.display === 'none') {
        B.style.display = 'block';
        P.style.display = 'none';
    } else {
        B.style.display = 'none';
    }
}