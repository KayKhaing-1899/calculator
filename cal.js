// clear
const allClear = document.getElementById("ac")
allClear.addEventListener("click",function() {
    document.querySelector("#display").value = " "
})

// delete
const del = document.getElementById("del")
del.addEventListener("click",function() {
    const num = document.querySelector("#display").value.slice(0,-1)
    document.getElementById("display").value = num
})

// seven
function seven() {
    if(document.getElementById("display").value == " ")
        document.getElementById("display").value = "7"
    else
        document.getElementById("display").value += "7"
}

// eight
function eight() {
    if(document.getElementById("display").value == " ")
        document.getElementById("display").value = "8"
    else
        document.getElementById("display").value += "8"
}

// nine
function nine() {
    if(document.getElementById("display").value == " ")
        document.getElementById("display").value = "9"
    else
        document.getElementById("display").value += "9"
}

// four
function four() {
    if(document.getElementById("display").value == " ")
        document.getElementById("display").value = "4"
    else
        document.getElementById("display").value += "4"
}

// five
function five() {
    if(document.getElementById("display").value == " ")
        document.getElementById("display").value = "5"
    else
        document.getElementById("display").value += "5"
}

// six
function six() {
    if(document.getElementById("display").value == " ")
        document.getElementById("display").value = "6"
    else
        document.getElementById("display").value += "6"
}

// one
function one() {
    if(document.getElementById("display").value == " ")
        document.getElementById("display").value = "1"
    else
        document.getElementById("display").value += "1"
}

// two
function two() {
    if(document.getElementById("display").value == " ")
        document.getElementById("display").value = "2"
    else
        document.getElementById("display").value += "2"
}

// three
function three() {
    if(document.getElementById("display").value == " ")
        document.getElementById("display").value = "3"
    else
        document.getElementById("display").value += "3"
}

// zero
function zero() {
    if(document.getElementById("display").value == " ")
        document.getElementById("display").value = "0"
    else
        document.getElementById("display").value += "0"
}

// point
function point() {
    if(document.getElementById("display").value == " ")
        document.getElementById("display").value = "."
    else
        document.getElementById("display").value += "."
}

// equal
function equal() {
    document.getElementById("display").value = eval(document.getElementById("display").value)
}