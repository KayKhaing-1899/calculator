var str = document.getElementById("display")

const allclear = document.getElementById("clear")
allclear.addEventListener("click",function() {
    str.innerText = "0"
})

const min = document.getElementById("minus")
min.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "-"
    else if(str.innerText.startsWith("-"))
        str.innerText = str.innerText
    else
        str.innerText = "-" + str.innerText
})

const mod =document.getElementById("modulus")
mod.addEventListener("click",function() {
    if(str.innerText == "0" || str.innerText.endsWith("%") || str.innerText.endsWith("+") || str.innerText.endsWith("-") || str.innerText.endsWith("*") || str.innerText.endsWith("/"))
        str.innerText = str.innerText
    else
        str.innerText += "%"
})

const div =document.getElementById("divide")
div.addEventListener("click",function() {
    if(str.innerText == "0" || str.innerText.endsWith("%") || str.innerText.endsWith("+") || str.innerText.endsWith("-") || str.innerText.endsWith("*") || str.innerText.endsWith("/"))
        str.innerText = str.innerText
    else
        str.innerText += "/"
})

const multi =document.getElementById("multiply")
multi.addEventListener("click",function() {
    if(str.innerText == "0" || str.innerText.endsWith("%") || str.innerText.endsWith("+") || str.innerText.endsWith("-") || str.innerText.endsWith("*") || str.innerText.endsWith("/"))
        str.innerText = str.innerText
    else
        str.innerText += "*"
})

const sub =document.getElementById("substract")
sub.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "-"
    else if(str.innerText.endsWith("-"))
        str.innerText = str.innerText
    else
        str.innerText += "-"
})

const add =document.getElementById("add")
add.addEventListener("click",function() {
    if(str.innerText == "0" || str.innerText.endsWith("%") || str.innerText.endsWith("+") || str.innerText.endsWith("-") || str.innerText.endsWith("*") || str.innerText.endsWith("/"))
        str.innerText = str.innerText
    else
        str.innerText += "+"
})

const equal = document.getElementById("equals")
equal.addEventListener("click",function() {
    str.innerText = eval(str.innerText)
})

const dot =document.getElementById("decimal")
dot.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText += "."
    else if(str.innerText == "." || str.innerText.endsWith("."))
        str.innerText = str.innerText
    else
        str.innerText += "."
})

const one =document.getElementById("one")
one.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "1"
    else
        str.innerText += "1"
})

const two =document.getElementById("two")
two.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "2"
    else
        str.innerText += "2"
})

const three =document.getElementById("three")
three.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "3"
    else
        str.innerText += "3"
})

const four =document.getElementById("four")
four.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "4"
    else
        str.innerText += "4"
})

const five =document.getElementById("five")
five.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "5"
    else
        str.innerText += "5"
})

const six =document.getElementById("six")
six.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "6"
    else
        str.innerText += "6"
})

const seven =document.getElementById("seven")
seven.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "7"
    else
        str.innerText += "7"
})

const eight =document.getElementById("eight")
eight.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "8"
    else
        str.innerText += "8"
})

const nine =document.getElementById("nine")
nine.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "9"
    else
        str.innerText += "9"
})

const zero =document.getElementById("zero")
zero.addEventListener("click",function() {
    if(str.innerText == "0")
        str.innerText = "0"
    else
        str.innerText += "0"
})
