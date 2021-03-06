/** add classes bootstrap **/
$("#register-form input:not([type='checkbox'],[type='submit'])").addClass("form-control");
$("#register-form input").wrap("<div class='form-group'></div>");
// //$(".form-control").parent().prev().css("border","2px solid red");
// //$(".form-control").parent().prev().prependTo(".form-group");// bad
$("#register-form label").each(function(index,item){
//console.log(item);
$(this).addClass("form-control-label");
let next = $(this).next();
$(this).prependTo(next);
});
let checkContainer = $("input[type='checkbox']").parent();
checkContainer.next().appendTo(checkContainer);
$("input[type='submit']").addClass("btn btn-primary");
$("input[type='submit']").parent().addClass("text-right");
/** add tooltip attribute and popover **/
$("input:not([type='submit'])").attr("data-toggle","tooltip");
$('[data-toggle="tooltip"]').tooltip({ //activating tooltip
placement:"left",
});
// $("input[type='submit']").attr("data-toggle","popover");
// $('[data-toggle="popover"]').popover({ //activating tooltip
// placement:"left",
// });


// /**validation**/
$("#register-form input:not([type='submit'])").on("focus",function(){
$(this).css("border","2px solid cyan");
});
$("#register-form input:not([type='submit'])").on("blur",function(){toValidate($(this))});
$("#register-form").on("submit",function(event){
//event.preventDefault();
//let inputs = $(this).children().children("input:not([type='submit'])");
let inputs = $(this).find("input:not([type='submit'])");
if(!toValidate(inputs))
event.preventDefault();
});

function toValidate(el)
{
//console.log(el);
if(validate(el))
{
el.css("border","2px solid green");
el.tooltip('hide');
return true;
}
else
{
el.css("border","2px solid red");
el.tooltip('show');
return false;
}
}

function validate(el)
{
//console.log(el.attr("name"));
if(el.attr("name") == "name_ar")
{
if(el.val().trim().match(/^[\u0621-\u064A ]+$/) == null)//only arabic letters
return false;
}
else if(el.attr("name") == "name_en")
{
if(el.val().trim().match(/^[a-zA-Z ]+$/) == null)
return false;
}
else if(el.attr("name") == "email")
{
if(el.val().trim().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) == null)
return false;
}
else if(el.attr("name") == "address")
{
if(el.val().trim().match(/^([\u0621-\u064A0-9\-, ]{3,})|([a-zA-Z0-9\-, ]{3,})+$/) == null)
return false;
}
else if(el.attr("name") == "phone")
{
if(el.val().trim().match(/^\+?\d{10,}$/) == null)
return false;
}
else if(el.attr("name") == "password")
{
if(el.val().trim().length < 8 )
return false;
}
else if(el.attr("name") == "confirm-password")
{
if(el.val().trim().length < 8)
return false;
if(el.val().trim() != $("#register-form input[name='password']").val().trim())
return false;
}
else if(el.attr("name") == "agree")
{
if(!el.attr("checked"))
return false;
}
else if(el.has("required").val() == "")
{
return false;
}
return true;
}


/** normal ajax **/
$("#normal").on("click",function(){
$.ajax
({
type: "GET",
url: "content9.txt",
dataType: 'text',
data: [],
async: false, // to make js wait unitl ajax finish
processData: false,
contentType: false,

 success: function (data)
{
//console.log(data);
$("#content-to-load").html(data);
},
error:function(error)
{
//console.log(data);
//console.log(data.responseJSON);
}
});
});
/** load **/
$("#load-btn").on("click",function(){
//$("#content-to-load").load("content1.txt");
$("#content-to-load").load("content1.txt #h1");
});
/** get **/
$("#get-btn").on("click",function(){
$.get("content1.txt",function(data){
$("#content-to-load").html(data);
});
});
/** get json **/
$("#get-json-btn").on("click",function(){
$.getJSON("data.json",function(data){
console.log(data.products);
$("#content-to-load").html("");
$.each(data.products,function(index,item){
var mainDiv = $("<div>");
var img = $("<img>");
img.attr({"src":item.img, "class":"img-thumbnail"});
mainDiv.append(img);
var productName = $("<a href='#'>");
productName.append(item.product_name);
mainDiv.append(productName);
var category = $("<span class='h6'>");
productName.append(item.category);
mainDiv.append(category);
var price = $("<span class='h6'>");
productName.append(item.price);
mainDiv.append(price);
$("#content-to-load").attr('class','row row-cols-2 border border-primary mx-auto');
$("#content-to-load").append(mainDiv);
});

});
});
$( document ).ajaxStart(function()
{
console.log("ajaxStart");
});
$( document ).ajaxSend(function()
{
console.log("ajaxSend");
});
$( document ).ajaxSuccess(function()
{
console.log("ajaxSuccess");
});
$( document ).ajaxError(function()
{
console.log("ajaxError");
});
$( document ).ajaxComplete(function()
{
console.log("ajaxComplete");
});
$( document ).ajaxStop(function()
{
console.log("ajaxStop");
});

