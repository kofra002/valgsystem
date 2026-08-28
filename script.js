const klasseValg = document.querySelector("#klasse");
const kodeValg = document.querySelector("#kode");
const knapp = document.querySelector("#okKnapp");

// const kode = {
//     IMIT: [1234, "IMIT er best!", "kode1"],
//     IMMP: [5678, "IMMP er greit.", "kode2"],
//     IMSTIT: [9101112, "hm.", "kode3"], 
//     IMSTMP: [13141516, "hmm...", "kode4"]
// };

function okKnapp() {
    const valgtKlasse = klasseValg.value;
    const kode = kodeValg.value;

    if (valgtKlasse === "IMIT" && 
        kode === "1234" || kode === "IMIT er best!" || kode === "kode1"
    ) {
        window.location.href = "IMIT.html";
    } 
    
    else if (valgtKlasse === "IMMP" && 
        kode === "5678" || kode === "IMMP er greit." || kode === "kode2"
    ) {
        window.location.href = "IMMP.html";
    }

    else if (valgtKlasse === "IMSTIT" && 
        kode === "9101112" || kode === "hm." || kode === "kode3"
    ) {
        window.location.href = "IMSTIT.html";
    }

    else if (valgtKlasse === "IMSTMP" && 
        kode === "13141516" || kode === "hmm...." || kode === "kode4"
    ) {
        window.location.href = "IMSTMP.html";
    }

    else {
        console.log("Klasse eller kode er feil. Prøv igjen.");
    }
};