
function sum() {
    let resultcontainer = document.getElementById("result")
    let poid = Number(document.getElementById("poid").value)
    let taille = Number(document.getElementById("taille").value)
    if (poid == "" || taille == "") {
        resultcontainer.textContent = "Ajoute une valeur a tes champs"
    } else {
        let imc = poid / ((taille /100) * (taille/100)) 
        resultcontainer.textContent = imc.toFixed(2)
        if (imc <= 18.5) {
            resultcontainer.textContent = imc.toFixed(2) + " : Insuffisance pondérale (maigreur)"
        } else if (imc > 18.5 && imc <= 25) {
            resultcontainer.textContent = imc.toFixed(2) + " : Corpulence normale"
        } else if (imc > 25 && imc <= 30) {
            resultcontainer.textContent = imc.toFixed(2) + " : Surpoids, Fait attention "
        } else {
            resultcontainer.textContent = imc.toFixed(2) + " : Obésité, arrète les Mc Do"
        }
    }
}
