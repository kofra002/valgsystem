const kodeValg = document.querySelector("#kode");
const knapp = document.querySelector("#okKnapp");


function sendSvar(code, candidate) {
    fetch("https://valg.duckdns.org/srv/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "code": code,
            "kandidat": candidate,
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network respone was not ok")
        }
        return respone.json();
    })
    .then(result => {
        console.log("Success:", result)
    })
    .cath(error => {
        console.error("Error:", error)
    })
}

function okKnapp() {
    fetch("https://valg.duckdns.org/srv/class", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "code": kodeValg.value,
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error("Network respone was not ok")
        }

        let klasse = "IM" + response.body.toString().toUpperCase()

        window.location.href = "https://valg.duckdns.org/" + klasse;

    })
}