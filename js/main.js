var a = $(".header").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {
        $('.header').css({
            "background":"white"
        }).removeClass('white');
        $('.header-inner').css({
            "padding-top":"5px",
            "padding-bottom":"10px",
            "border-bottom":"1px solid black"
        }).removeClass('white');
    } else {
        $('.header').css({
            "background":"transparent"
        }).addClass('white');
        $('.header-inner').css({
            "padding-top":"10px",
            "padding-bottom":"0px",
            "border-bottom":"none"
        }).removeClass('white');
    }
});
