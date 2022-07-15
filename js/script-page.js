$(document).ready(function(){

  $(".hidden-lg").click(function() {
    $('.menu-top').fadeToggle(350);
    $(this).toggleClass("on");
    $(".main-mnu").slideToggle();
    return false;
  });
//  -----button top  ----------------
$(window).scroll(function(){
  if ($(this).scrollTop() > $(this).height())
  {
    $(".btn-up").addClass("act");
  }else{
    $(".btn-up").removeClass("act");
  }
});
$('.btn-up').click(function(){
  $('html , body').stop().animate({scrollTop:0},'slow','swing');
});

// -----------konstr-------------

var vh = (window.pageYOffset + innerHeight);
var con = vh/1.5;
var vw = $(window).width(); 
$(window).scroll(function(){
  if (vw > 450) {
    if ($(this).scrollTop() > con){
      $("#exit-constr").animate({ left: '10px'},'slow','swing');  }
  } else {
    if ($(this).scrollTop() > 100){
      $("#exit-constr").animate({ left: '0px'});  
    } 
  }
});

//      panginator blog    

var d =$('.post-wrap');
var n = 9;
var m = d.toArray().length;
var x = 0;

d.slice(n,m).hide();
$('#str').on('click',function(){
  var h = (window.pageYOffset + innerHeight);
       x += n; 
    if(x < m){
        d.slice(x,x+n).fadeIn(500);
        $('html , body').stop().animate({scrollTop: h - vh},'slow','swing');
    }else{
      alert('Каталог закончен !')
      $(this).fadeIn(500);
    }
});
// --------nav moh-----------------
if(vw <450){ 
  $('.submenu >li>a[text="review"]').hide();
  $('.submenu >li>a[text="review-ua"]').hide();
  $('.submenu >li>a[text="model"]').hide();
  $('.submenu >li>a[text="model-ua"]').hide();
}

});
//-------------------
$(window).on('load',function(){
  $(".preloyder").delay(500).fadeOut("slow");
})