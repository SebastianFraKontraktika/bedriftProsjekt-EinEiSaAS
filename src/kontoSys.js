x = document.cookie
console.log(x)

if(x == "value=true") {
    console.log("hallo")
    let K = document.getElementById("kontoKp");
    let I = document.getElementById("innlogging");
    K.style.display = 'block';
    I.style.display = 'none';
}

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
            document.cookie = "value=true"
            break
        } else {
            console.log("feil")
        }

    }

}

function visLogg() {
    let loggInnKp = document.getElementById("loggInBtn");
    let lagBrukKp = document.getElementById("lagBrukBtn");
    let B = document.getElementById("brukerSys");
    let P = document.getElementById("passordSys");
    if (P.style.display === 'none') {
        loggInnKp.style.backgroundColor = '#CFB8BD';
        lagBrukKp.style.backgroundColor = 'white'
        P.style.display = 'block';
        B.style.display = 'none';
    } else {
        P.style.display = 'none';
        loggInnKp.style.backgroundColor = 'white';
    }
}

function visBruk() {
    let loggInnKp = document.getElementById("loggInBtn");
    let lagBrukKp = document.getElementById("lagBrukBtn");
    let B = document.getElementById("brukerSys");
    let P = document.getElementById("passordSys");
    if (B.style.display === 'none') {
        lagBrukKp.style.backgroundColor = '#CFB8BD';
        loggInnKp.style.backgroundColor = 'white';
        B.style.display = 'block';
        P.style.display = 'none';
    } else {
        B.style.display = 'none';
        lagBrukKp.style.backgroundColor = 'white';
    }
}
function reset() {
    document.cookie = "value=false"
    localStorage.clear()
}