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


$('.nav-mobile').click(function(){
    $('.mobile-links').toggle(300)
});

$('.mobile-links a').click(function () {
    $('.mobile-links').toggle(300)
});

$(window).resize(function() {
    if ($(window).width() > 680) {
        $('.mobile-links').hide();
    }
});

//GALLERY
$('.gallery-arrow').css("margin-top",($(".gal-col").height() - $('.gallery-arrow').height())/2);
var imgLinks = [];
var head = 0;
var numOfImage = 7;
var gal1 = $('.gal-col:nth-child(2)');
var gal2 = $('.gal-col:nth-child(3)');
var gal3 = $('.gal-col:nth-child(4)');
for(var i = 1;i <= numOfImage;i++){
    var temp = "imgs/gallery/"+i+".jpg";
    imgLinks.push(temp);
}
setGalleryImgs(head,head+1,head+2);
tail = calcActiveDivs();
function setGalleryImgs(loc1,loc2,loc3){
    gal1.fadeOut(100, function () {
        gal1.css({
            "background-image":"url("+imgLinks[loc1]+")",
            "background-size":"cover"
        });
        gal1.fadeIn(100);
    });
    if($(gal2).is(':visible')){
        gal2.fadeOut(100, function () {
            gal2.css({
                "background-image":"url("+imgLinks[loc2]+")",
                "background-size":"cover"
            });
            gal2.fadeIn(100);
        });
    }

    if($(gal3).is(':visible')){
        gal3.fadeOut(100, function () {
            gal3.css({
                "background-image":"url("+imgLinks[loc3]+")",
                "background-size":"cover"
            });
            gal3.fadeIn(100);
        });
    }
}
function recalculateGallery(right) {
    if(right){
        var numOfDivs = calcActiveDivs();
        if(head+numOfDivs!=imgLinks.length){
            head = head + 1;
            setGalleryImgs(head,head+1,head+2);
        }
    }else{
        if(head!=0){
            head = head - 1;
            setGalleryImgs(head,head+1,head+2);
        }
    }
}
function calcActiveDivs() {
    var num = 0;
    if( $(gal1).css('display') != 'none'){
        num++;
    }
    if( $(gal2).css('display') != 'none'){
        num++;
    }
    if( $(gal3).css('display') != 'none'){
       num=num+1;
    }
    return num;
}
$('.gallery-arrow:nth-child(1)').click(function () {
    recalculateGallery(false)
});
$('#gallery :nth-child(5)').click(function () {
    recalculateGallery(true)
});
$(window).resize(function() {

});