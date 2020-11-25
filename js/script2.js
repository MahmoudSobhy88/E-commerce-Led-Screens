/** div example1**/
 $("button[data-color='red']").click(function(){
 $(".square").css("backgroundColor","red");
 });

  $("button[data-color='green']").one("click",function(){
 $(".square").css("backgroundColor","green");
 });
 $("button[data-color='blue']").on("click",function(){
 $(".square").css("backgroundColor","blue");
 });
 $("button[data-color='yellow']").on("click",function(){
 $(".square").css("backgroundColor","yellow");
 $("button[data-color='blue']").off("click");
 $("button[data-color='red']").off("click");
});

$("button[data-color='addBlack']").on("click",function(){
$(this).before("<button data-color='black'>black</black>")
});
// $("button[data-color='black']").on("click",function(){
// $(".square").css("backgroundColor","black");
// }); //will not work
$(document).on("click","button[data-color='black']",function(){
$(".square").css("backgroundColor","black");
}); //will work