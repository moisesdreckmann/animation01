input1 = document.getElementById("user")
input2 = document.getElementById("pass")
label1 = document.getElementById("labelUser")
label2 = document.getElementById("labelPass")
texto1 = document.getElementById("texto1")
texto2 = document.getElementById("texto2")

input1.addEventListener("focus", upper) 
input2.addEventListener("focus", upper) 
input1.addEventListener("blur", lower)
input2.addEventListener("blur", lower)

function upper (event) {
    if(input1 == document.activeElement) {
        label1.style.transform = "translate(0, -17px) scale(1.2)"
        texto1.innerText = ":"
    }
    if(input2 == document.activeElement) {
        label2.style.transform = "translate(0, -17px) scale(1.2)"
        texto2.innerText = ":"
    }
}

function lower (event) {
    if (input1.value.length == 0) {
        label1.style.transform = "translate(0, 0) scale(1)"
        texto1.innerText = ""
    }
    if (input2.value.length == 0) {
        label2.style.transform = "translate(0, 0) scale(1)"
        texto2.innerText = ""
    }
}

goblinUp = document.querySelector(".goblin-up")
goblinDown = document.querySelector(".goblin-down")
goblinLeft = document.querySelector(".goblin-left")
goblinRight = document.querySelector(".goblin-right")
goblinDown.style.display = "block"

setInterval(function() {
    if(goblinUp.style.display == "block") {
        goblinUp.style.display = "none"
        goblinRight.style.display = "block"
    } else if(goblinRight.style.display == "block") {
        goblinRight.style.display = "none"
        goblinDown.style.display = "block"
    } else if(goblinDown.style.display == "block") {
        goblinDown.style.display = "none"
        goblinLeft.style.display = "block"
    } else if (goblinLeft.style.display == "block") {
        goblinLeft.style.display = "none"
        goblinUp.style.display = "block"
    }
}, 4000)