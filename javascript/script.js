$(".mainmenu>li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});
$(".mainmenu>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});

var slideSpeed=2800;

$(".slide").children("a:gt(0)").hide();

var end=setInterval(function(){
    $(".slide").find("a:first").stop().fadeOut(slideSpeed)
    .next().fadeIn(slideSpeed).end().appendTo(".slide")
}, slideSpeed);

$(".onClick").click(function(){
    $("#modal").show();
});
$(".modalbutton").click(function(){
    $("#modal").hide();
});