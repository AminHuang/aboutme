$(document).ready(function() {
    $(".books-detail").hide();
    $(".caption").mouseover(function(){
        var timer;
        var $caption = $(this);
        timer = setTimeout(function(){
            $caption.children(".books-detail").show(500);
        }, 500);
        
    });
    // $(".caption").mouseout(function(){
    //     $(this).children(".books-detail").hide(500);
    // });
});