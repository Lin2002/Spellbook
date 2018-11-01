$(".revelio").click(function(){
    $("#sword").fadeToggle();
    $("#dsword").toggle();
    $("#steve").toggle();
    $(".aparacium").toggle();
    $(".expecto").toggle();
});

$(".aparacium").click(function(){
    $("#shield").fadeToggle();
    $("#wshield").toggle();
    $("#steve").toggle();
    $(".revelio").toggle();
    $(".expecto").toggle();
});
 
    
$(".expecto").click(function(){
    $("#armor").fadeToggle();
    $("#darmor").toggle();
    $("#steve").toggle();
    $(".revelio").toggle();
    $(".aparacium").toggle();
});
    