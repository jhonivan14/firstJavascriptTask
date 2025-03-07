const elementTxt = document.getElementById("elements");
const sumTxt = document.getElementById("sum");

let arr = [];
let sum = 0;

arr.push(23);
arr.push(55);
arr.push(10);
arr.push(90);
arr.push(18);

for(let i=0; i<arr.length; i++ ) {
    sum += arr[i];
}

elementTxt.innerHTML = arr.join("<br>");
sumTxt.innerHTML = sum;
console.log(arr);