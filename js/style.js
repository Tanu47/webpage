$(document).ready(function(){

$('#btn1').click(function(){
$('#con1').slideDown(2000);	
$('#con2,#con3,#con4').slideUp();
});

$('#btn2').click(function(){
$('#con2').slideDown(2000);	
$('#con1,#con3,#con4').slideUp();
});

$('#btn3').click(function(){
$('#con3').slideDown(2000);	
$('#con1,#con2,#con4').slideUp();
});

$('#btn4').click(function(){
$('#con4').slideDown(2000);	
$('#con1,#con2,#con3').slideUp();
});


});