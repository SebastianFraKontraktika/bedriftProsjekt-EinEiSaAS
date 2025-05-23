x = document.cookie
console.log(x)

if(x == "value=true") {
    let K = document.getElementById("kontoKp");
    let I = document.getElementById("innlogging");
    K.style.display = 'block';
    I.style.display = 'none';
}

function submit() {
    let lagBrukKp = document.getElementById("lagBrukBtn");
    let B = document.getElementById("brukerSys");
    let brukNavn = document.getElementById("bNavn").value;
    let passord = document.getElementById("pOrd").value;
    localStorage.setItem(brukNavn, passord)
    lagBrukKp.style.backgroundColor = 'white';
    B.style.display = 'none';
}

function logg() {
    for (var i = 0; i < localStorage.length; i++){
        let loggBruker = document.getElementById("loggBruk");
        let loggPass = document.getElementById("loggPass");
        let bruker = localStorage.key(i)
        console.log(bruker)
        console.log(localStorage.getItem(bruker))
        if (loggBruker.value == bruker && loggPass.value == localStorage.getItem(bruker)) {
            console.log("hurra")
            let kontoKp = document.getElementById("kontoKp")
            let innloggKp = document.getElementById("innlogging")
            kontoKp.style.display = 'block'
            innloggKp.style.display = 'none'
            document.cookie = "value=true"
            window.alert("du er nå innlogget!")
            break
        } else {
            window.alert("Feil brukernavn eller passord");
            loggBruker.style.backgroundColor = '#9F7A83';
            loggPass.style.backgroundColor = '#9F7A83';
        }

    }

}

function visLogg() {
    let loggInnKp = document.getElementById("loggInBtn");
    let lagBrukKp = document.getElementById("lagBrukBtn");
    let B = document.getElementById("brukerSys");
    let P = document.getElementById("passordSys");
    if (P.style.display === 'block') {
        loggInnKp.style.backgroundColor = 'white';
        lagBrukKp.style.backgroundColor = 'white'
        P.style.display = 'none';
        B.style.display = 'none';
    } else {
        P.style.display = 'block';
        B.style.display = 'none';
        loggInnKp.style.backgroundColor = '#CFB8BD';
        lagBrukKp.style.backgroundColor = 'white';
    }
}

function visBruk() {
    let loggInnKp = document.getElementById("loggInBtn");
    let lagBrukKp = document.getElementById("lagBrukBtn");
    let B = document.getElementById("brukerSys");
    let P = document.getElementById("passordSys");
    if (B.style.display === 'block') {
        lagBrukKp.style.backgroundColor = 'white';
        loggInnKp.style.backgroundColor = 'white';
        B.style.display = 'none';
        P.style.display = 'none';
    } else {
        B.style.display = 'block';
        P.style.display = 'none';
        lagBrukKp.style.backgroundColor = '#CFB8BD';
        loggInnKp.style.backgroundColor = 'white';
    }
}
function reset() {
    document.cookie = "value=false"
    localStorage.clear()
}

function change() {
    let navn = document.getElementById("navnId");
    let user = document.getElementById("brukId");
    let dato = document.getElementById("datoBruk");
    let submitChg = document.getElementById("submitChange");
    submitChg.style.display = 'block';
    navn.removeAttribute("readonly");
    user.removeAttribute("readonly");
    dato.removeAttribute("readonly");
    navn.style.border = "medium solid #9F7A83";
    user.style.border = "medium solid #9F7A83";
    dato.style.border = "medium solid #9F7A83";
}

function submitChange() {
    let navn = document.getElementById("navnId");
    let user = document.getElementById("brukId");
    let dato = document.getElementById("datoBruk");
    let submitChg = document.getElementById("submitChange");
    navn.style.border = "none";
    user.style.border = "none";
    dato.style.border = "none";
    submitChg.style.display = "none";
    navn.setAttribute('readonly', true);
    user.setAttribute('readonly', true);
    dato.setAttribute('readonly', true);
}