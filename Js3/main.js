const elementTxt = document.getElementById("elements");
const numInput = document.getElementById("numInput");
const sumTxt = document.getElementById("sum");
const highestNum = document.getElementById("highestNum");
const lowestNum = document.getElementById("lowestNum");

let arr = [];

function insertElement() {
    let num = parseInt(numInput.value);
    if (isNaN(num)) return; 

    arr.push(num);

    let sum = 0;
    let smallest = arr[0];
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

  
    elementTxt.innerText = arr.join(", ");
    sumTxt.innerText = sum;
    highestNum.innerText = largest;
    lowestNum.innerText = smallest;

    numInput.value = ""; 
}


function deleteAll() {
    arr = [];
    elementTxt.innerText = "";
    sumTxt.innerText = "";
    highestNum.innerText = "";
    lowestNum.innerText = "";
}
