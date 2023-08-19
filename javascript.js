let input1 = document.getElementById("user")
let input2 = document.getElementById("pass")
let label1 = document.getElementById("labelUser")
let label2 = document.getElementById("labelPass")
let texto1 = document.getElementById("texto1")
let texto2 = document.getElementById("texto2")
input1.addEventListener("focus", upper) 
input2.addEventListener("focus", upper) 
input1.addEventListener("blur", lower)
input2.addEventListener("blur", lower)

let goblinUp = document.querySelector(".goblin-up")
let goblinDown = document.querySelector(".goblin-down")
let goblinLeft = document.querySelector(".goblin-left")
let goblinRight = document.querySelector(".goblin-right")
goblinDown.style.display = "block"

let navBar = document.querySelector(".retanguloWrapper")
let bars = document.querySelectorAll(".retangulo")
navBar.addEventListener("click", alterarEstado)

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

function alterarEstado(event) {
    if(bars[1].style.display == "none") {
        bars[1].style.display = "flex";
        bars[0].style.transform = "translateY(0) rotate(0)"
        bars[2].style.transform = "translateY(0) rotate(0)"
        navBar.style.backgroundColor = "black"
    } else {
        bars[1].style.display = "none";
        bars[0].style.transform = "translateY(8px) rotate(45deg)"
        bars[0].style.transition = "transform .5s"
        bars[2].style.transform = "translateY(-8px) rotate(-45deg)"
        bars[2].style.transition = "transform .5s"
        navBar.style.backgroundColor = "red"
    }
}

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





