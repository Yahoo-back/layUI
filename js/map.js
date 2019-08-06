// $('html, body').animate({
//     scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);

$(function(){
    if(document.body.offsetWidth < 768){
        var pc = document.getElementById("pc");
        pc.style.display = "none";
        var mobile = document.getElementById("mobile");
    }
    if(document.body.offsetWidth >= 768){
        var mobile = document.getElementById("mobile");
        mobile.style.display = "none";
    }
    
})