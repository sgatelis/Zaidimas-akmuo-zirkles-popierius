"use strict"

var button = document.querySelector("button")
var h1 = document.querySelector("h1")
var akmuo = document.querySelector(".akmuo")
var zirkles = document.querySelector(".zirkles")
var popierius = document.querySelector(".popierius")
var spanPlayer = document.querySelector(".span-player")
var spanComputer = document.querySelector(".span-computer")

var zaidPasirink = ""
var kompoPasirink = ""

function zaidejas(){   
   
    akmuo.onclick = () => {         
        h1.innerText = "Now press START"
        zirkles.style.opacity = "0.3"
        popierius.style.opacity = "0.3"
        zaidPasirink = akmuo.className
        console.log(zaidPasirink) 
    }

    zirkles.onclick = () => {
        h1.innerText = "Now press START"
        akmuo.style.opacity = "0.3"
        popierius.style.opacity = "0.3"
        zaidPasirink = zirkles.className
        console.log(zaidPasirink)
    }

    popierius.onclick = () => {
        h1.innerText = "Now press START"
        akmuo.style.opacity = "0.3"
        zirkles.style.opacity = "0.3"
        zaidPasirink = popierius.className
        console.log(zaidPasirink)
    }
}
zaidejas()


function pasirinkGeneravimas () {

    button.onclick = () => {        
        var kompoVariantas = document.querySelectorAll(".kompas")
        var atsitiktinisPasirink = Math.floor(Math.random() * 3);
        kompoPasirink = kompoVariantas[atsitiktinisPasirink]
        for (var x of kompoVariantas) {
            if (x != kompoPasirink)
                x.style.opacity = "0.5"
        }
        console.log(kompoPasirink)        
        // countResults()
    }

}
pasirinkGeneravimas()


function skaiciavimas () {
    var result = "lygiosios"
    if (zaidPasirink === "zirkles" && pcChoise === "popierius") result = "pergalė"
    if (zaidPasirink === "popierius" && pcChoise === "akmuo") result = "pergalė"
    if (zaidPasirink === "akmuo" && pcChoise === "zirkles") result = "pergalė"

    if (zaidPasirink === "popierius" && pcChoise === "zirkles") result = "pralaimėjai"
    if (zaidPasirink === "akmuo" && pcChoise === "popierius") result = "pralaimėjai"
    if (zaidPasirink === "zirkles" && pcChoise === "akmuo") result = "pralaimėjai"
    return result

}
skaiciavimas ()