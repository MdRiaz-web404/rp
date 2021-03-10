//menu funtion
function openMenu(){
    document.getElementById('menu-item').style.width="100%";
}
function closeMenu(){
    document.getElementById('menu-item').style.width="0";
}
//mixit up
var mixer = mixitup('.project__grid');

//smooth scroll
$('#heading-section .row .logo a,.next-section a, .navbar ul li a,#footer .top a').on('click',function(){
    $('html,body').animate({
        scrollTop:$($.attr(this,'href')).offset().top
    },1000);
    return false
});