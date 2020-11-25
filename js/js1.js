/*var arr = [], evenNumbers =[], oddnumbers =[];
for (var i =0; i<=1000;i++)

{
    arr.push(i);
}
for (var i = 0; i <=arr.length; i++) {
  if (i%10==0)
  {
	  evenNumbers.push(i);
  }
 else
 {
	 
	 oddnumbers.push(i);
 }
}
console.log("evenNumbers : "+evenNumbers);
console.log("oddNumbers : "+oddnumbers);*/


/*var arr =[] ;
var primaryNumbers = [];
for(var i=0; i<=100; i++)
{
arr.push(i);
}

for(var i=2; i< arr.length; i++)
{
var prime = true;
for(var j=2; j<i; j++)
{
if(i%j == 0)
{
prime =false;
break;
}
}
if(prime)
{
primaryNumbers.push(i);
}
}
console.log("primary numbrs : "+primaryNumbers);*/

var fromAPI =
[
{
"content":"youtube",
"url":"https://www.youtube.com/"
},
{
"content":"amazon",
"url":"https://www.amazon.com/"
},
{
"content":"stackoverflow",
"url":"https://stackoverflow.com/"
}
]
for(var i=0; i<fromAPI.length; i++)
{
var listItem = document.createElement("li");
var anchorItem = document.createElement("a");
var content = document.createTextNode(fromAPI[i]["content"]);
anchorItem.setAttribute("href",fromAPI[i]["url"]);
anchorItem.appendChild(content);
listItem.appendChild(anchorItem);
const LIST = document.querySelector(".add-new-element");
LIST.appendChild(listItem);
console.log(LIST);
}


vario = document.querySelector(".add-new-element li a").style;
console.log(vario);
vario.color="lightgreen";
vario.backgroundColor="gray";
vario.cssText=" padding:1em; text-decoration:none; color:lightgreen;";
document.querySelector(".add-new-element li a").setAttribute("style","color:orange; background-color:lightblue; margin-left:-18px;");



/** events **/
function toAlert()
{
alert('you will not go any where');
}
function toAlert2(event)
{
event.preventDefault();
alert('you will not go any where2222');
}
function toAlert3(event)
{
event.preventDefault();
alert('you will not go any waaaa');
}
var vario = document.querySelector(".anchor2");
/*** event handler ***/
// vario.onclick = toAlert2;
// vario.onclick = toAlert3;

/** event listner **/
vario.addEventListener("click",toAlert2);
vario.addEventListener("click",toAlert3);