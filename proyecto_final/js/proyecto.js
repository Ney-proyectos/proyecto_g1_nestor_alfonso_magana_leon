// funcion para resposive para que muestre el menu 
$(window).resize(function(){
if ($(window).width() <= 767) {
    $("nav").hide();
}
else{
    $("nav").show();
}

});

$("#btn_menu").click(function(){
    $("nav").slideToggle();
        
});


