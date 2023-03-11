var fNum;
var lNum;
var sum, difference, product, quotient, remainder;
var answer;

const addsh = document.getElementById("add");
const subsh = document.getElementById("subtract");
const mulsh = document.getElementById("multiply");
const divsh = document.getElementById("division");
const modsh = document.getElementById("modul");

addsh.addEventListener("click", addition);
subsh.addEventListener("click", subtraction);
mulsh.addEventListener("click", multiplication);
divsh.addEventListener("click", division);
modsh.addEventListener("click", modulus);


function addition() {
    fNum = parseFloat(document.getElementById("num1").value);
    lNum = parseFloat(document.getElementById("num2").value);
    sum = fNum + lNum;
    if (isNaN(sum)) {
        document.getElementById("opr").innerHTML= "Sum";
        document.getElementById("answer").innerHTML = "Please enter a valid integer or float";
    }
    else {
        document.getElementById("opr").innerHTML= "Sum";
        document.getElementById("result").setAttribute('value',sum);
        document.getElementById("answer").innerHTML = "The sum of " +fNum+ " and " +lNum+ " is " +sum;
    }
    
}

function subtraction() {
    fNum = parseFloat(document.getElementById("num1").value)
    lNum = parseFloat(document.getElementById("num2").value)
    difference = fNum-lNum;
    if (isNaN(difference)) {
        document.getElementById("opr").innerHTML= "Difference";
        document.getElementById("answer").innerHTML = "Please enter a valid integer or float";
    }
    else {
        document.getElementById("opr").innerHTML= "Difference";
        document.getElementById("result").setAttribute('value',difference);
        document.getElementById("answer").innerHTML = "The difference of " +fNum+ " and " +lNum+ " is " +difference;
    }
}

function multiplication() {
    fNum = parseFloat(document.getElementById("num1").value);
    lNum = parseFloat(document.getElementById("num2").value);
    product = fNum*lNum;
    if (isNaN(product)) {
        document.getElementById("opr").innerHTML= "Product";
        document.getElementById("answer").innerHTML = "Please enter a valid integer or float";
    }
    else {
        document.getElementById("opr").innerHTML= "Product";
        document.getElementById("result").setAttribute('value',product);
        document.getElementById("answer").innerHTML = "The product of " +fNum+ " and " +lNum+ " is " +product;
    }
}

function division() {
    fNum = parseFloat(document.getElementById("num1").value);
    lNum = parseFloat(document.getElementById("num2").value);
    quotient = fNum/lNum;
    if (isNaN(quotient)) {
        document.getElementById("opr").innerHTML= "Quotient";
        document.getElementById("answer").innerHTML = "Please enter a valid integer or float";
    }
    else if (quotient===Infinity) {
        document.getElementById("opr").innerHTML= "Quotient";
        document.getElementById("answer").innerHTML = "The quotient of " +fNum+ " and " +lNum+ " is undefined";
    }
    else {
        document.getElementById("opr").innerHTML= "Quotient";
        document.getElementById("result").setAttribute('value',quotient);
        document.getElementById("answer").innerHTML = "The quotient of " +fNum+ " and " +lNum+ " is " +quotient;
    }
}

function modulus(){
    fNum = parseFloat(document.getElementById("num1").value);
    lNum = parseFloat(document.getElementById("num2").value);
    remainder = fNum%lNum;
    if (isNaN(remainder)) {
        document.getElementById("opr").innerHTML= "Remainder of quotient";
        document.getElementById("answer").innerHTML = "Please enter a valid integer or float";
    }
    else if (remainder===Infinity || remainder===null) {
        document.getElementById("opr").innerHTML= "Remainder of quotient";
        document.getElementById("answer").innerHTML = "The remainder of quotient " +fNum+ " and " +lNum+ " is undefined";
    }
    else {
        document.getElementById("opr").innerHTML= "Remainder of Quotient";
        document.getElementById("result").setAttribute('value',remainder);
        document.getElementById("answer").innerHTML = "The remainder of quotient " +fNum+ " and " +lNum+ " is " +remainder;
    }
}