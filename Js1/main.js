const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum");
const resultTxt2 = document.getElementById("diff");
const resultTxt3 = document.getElementById("quo");
const resultTxt4 = document.getElementById("prod");

let sum = 0;
let diff = 0;
let quo = 0;
let prod = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt.innerHTML = sum;
        diff = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        resultTxt2.innerHTML = diff;
        quo = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        resultTxt3.innerHTML = quo;
        prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        resultTxt4.innerHTML = prod;
    }
    
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    resultTxt2.innerHTML = "";
    resultTxt3.innerHTML = "";
    resultTxt4.innerHTML = "";
    sum = 0;
    diff= 0;
    quo= 0;
    prod= 0;


}

