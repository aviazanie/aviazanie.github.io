$(document).ready(function(){

  $(".hidden-lg").click(function() {
    $('.menu-top').fadeToggle(350);
    $(this).toggleClass("on");
    $(".main-mnu").slideToggle();
    return false;
  });
//  -----button top  ������ ������----------------
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


//      panginator blog    

var vh = (window.pageYOffset + innerHeight);
var d =$('.post-wrap');
var n = 7;
var m = d.toArray().length;
var x = 0;

d.slice(n,m).hide();
$('#post-btn').on('click',function(){
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

// ------------------archive-------------




});
//-------------------��������� ����� ---------------
$(window).on('load',function(){
  $(".preloyder").delay(500).fadeOut("slow");
})