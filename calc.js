
function add(){
let n1 = document.getElementById("num1").value;
let n2 = document.getElementById("num2").value;
let result = Number(n1) + Number(n2) ;

document.getElementById("result").innerHTML =  "Result" + "<br>" ;
document.getElementById("result-2").innerHTML =  result  ;
localStorage.setItem('Result' , result);
}

function subtract(){
let n3 = document.getElementById("num1").value;
let n4 = document.getElementById("num2").value;
let result = Number(n3) - Number(n4) ;

document.getElementById("result").innerHTML =  "Result" + "<br>" ;
document.getElementById("result-2").innerHTML =  result  ;
localStorage.setItem('Result' , result);
}

function multiply(){
let n5 = document.getElementById("num1").value;
let n6 = document.getElementById("num2").value;
let result = Number(n5) * Number(n6) ;

document.getElementById("result").innerHTML =  "Result" + "<br>" ;
document.getElementById("result-2").innerHTML =  result  ;
localStorage.setItem('Result' , result);
}

function divide(){
let n7 = document.getElementById("num1").value;
let n8 = document.getElementById("num2").value;
let result = Number(n7) / Number(n8) ;

document.getElementById("result").innerHTML =  "Result" + "<br>" ;
document.getElementById("result-2").innerHTML =  result  ;+

localStorage.setItem('Result' , result);
}

function clearInputs(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("result-2").innerHTML=0;
}

function clearHistory(){
    localStorage.removeItem("Result");
    alert("History Deleted!");

}

console.log("Well this only required 188 lines of codes 😎")