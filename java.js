let index = 0; 
let table = document.getElementById("table");
function changecolor() {
    let symbols, color;
    symbols = "0123456789ABCDEF";
color = "#" ;
for (let i =0;i<6;i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }   
    document.getElementById("changecolor").style.background = color;
    document.querySelector("#changecolor").style.color = "#ffffff";   
    document.querySelector(".changecolor").style.color = color;
    document.querySelector(".Text").style.background = color;
    document.querySelector(".Text").style.color = "#ffffff";    
}
function add() {
    index++;
    let y = document.createElement("tr");
    let z  = document.createElement("td");
    let w  = document.createElement("td");
    w.innerHTML = index + ".";
    z.innerHTML = document.getElementById('Text').value
    y.appendChild(w);
    y.appendChild(z);
    document.querySelector("tbody").appendChild(y);
}
function delet() {
    if(index > 0) {
        let tbody = document.querySelector("tbody");
        let lastChild = tbody.lastChild;
        console.log(lastChild);
        tbody.removeChild(lastChild);
        index--;
    }   
}
function torlesAll() {    
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    index = 0;    
}