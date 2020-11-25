/*** mini calculator ***/
function calc(event,formID)
{
event.preventDefault();
console.log(vario);
var num1 = formID.querySelector(".num1").value;
var num2 = formID.querySelector("#num2").value;
var operator = formID.querySelector("select").value;
formID.querySelector("input:disabled").value = eval(num1+operator+num2);
}

var vario = document.querySelector("#mini-calculator");
vario.addEventListener("submit",function(event){calc(event,this)});