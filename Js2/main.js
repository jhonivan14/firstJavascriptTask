const num1Txt = document.getElementById("fname");
const num2Txt = document.getElementById("mname");
const num3Txt = document.getElementById("lname");
const resultTxt = document.getElementById("conca");

function concatenate() {
    resultTxt.innerHTML = num1Txt.value + " " + num2Txt.value + " " + num3Txt.value;
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = "";
    num3Txt.value = "";
    resultTxt.innerHTML = "";
}