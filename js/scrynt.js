
$(document).ready(function(){

  var w=$(window).width();
 
// // ------window pull--------------
setTimeout(() => {
  $('.pull').css({'opacity':'1'}).addClass('animation-target');
}, 3000);
setTimeout(() => {
  $('.pullA').css({'opacity':'1'}).addClass(' animation-target');
}, 6000);
setTimeout(() => {
  $('.pullB').css({'opacity':'1'}).addClass(' animation-target');
}, 9000);

//-------------
$('.mouse-icon ').click (function () {
  $(' html , body ').animate({
    scrollTop: $('.s-klubok ').offset().top
   }, 800 );
}) ;

// //icon mobil-menu

$(".hidden-lg").click(function() {
  $('.menu-top').fadeToggle(350);
  $(this).toggleClass("on");
  $(".main-mnu").slideToggle();
  return false;
});

 $(".botton-icon").click(function() {
  $('.menu-footer').fadeToggle(350);
  $(this).toggleClass("on");
  $(".main-mnu").slideToggle();
  return false;
});
  if (w > 1100) {
    $('.menu-top,.menu-footer').on('click',function(){
      $('.menu-footer').fadeOut(400);
      $(".hidden-lg , .botton-icon").removeClass("on");
      $(".main-mnu").slideToggle();
  });
  }
  if (w < 1100){
    $('.menu-top,.menu-footer').on('click',function(){
      $('.menu-top,.menu-footer').fadeOut(400);
      $(".hidden-lg , .botton-icon").removeClass("on");
      $(".main-mnu").slideToggle();
  });
  }


// --------s-klubok--------------------


$('.uzer-klubok .close-uz-klubok').on('click',function(){  
  $('.uzer-klubok').fadeOut(300);
  $('.collectyons').hide();
  $('#Erorr').fadeIn();

});
// --------------level7-------
$('#Erorr strong').on('click',function(){
  $('.level7').fadeOut(500) ; 
  $('.infirm').css({
  'border-color': '#444444',
  'border-bottom-width': '2px' ,
  'transform': 'scale(1)'
 });
 $('html , body').animate({
       scrollTop : $('.s-klubok').offset().top
      } , 250 );
});

// ;;;;;;;;;;;;;;;;;;
$('.coll-alt .coll-alt0').on('click',function(){
  $('.infirm').css({
    'border-color': '#444444',
    'border-bottom-width': '2px' ,
    'transform': 'scale(1)'
   });
   if (w > 450) {
    $('html , body').animate({
         scrollTop : $('#top-firm').offset().top
        } , 200 );
   } else {
    $('html , body').animate({
         scrollTop : $('#top').offset().top
        } , 200 );
   }

  var btnAlt0=$(this).val();
  var firm= $(this).attr('name')
  $('#'+firm).css({
   'border-color': '#ddacaf',
   'border-bottom-width': '4px' ,
   'transform': 'scale(1.2)'
  });
  $( '.collectyons').hide();
  $( '#'+btnAlt0).slideToggle(500);

});


$('.coll-alt .coll-alt1').on('click',function(){
  $('.infirm').css({
    'border-color': '#444444',
    'border-bottom-width': '2px' ,
    'transform': 'scale(1)'
   });
   if (w > 450) {
    $('html , body').animate({
         scrollTop : $('#top-firm').offset().top
        } , 200 );
   } else {
    $('html , body').animate({
         scrollTop : $('#top').offset().top
        } , 200 );
   }
  var btnAlt1=$(this).val();
  var firm= $(this).attr('name')
  $('#'+firm).css({
   'border-color': '#ddacaf',
   'border-bottom-width': '4px' ,
   'transform': 'scale(1.2)'
  });
  $( '.collectyons').hide();
  $( '#'+btnAlt1).slideToggle(500);
});

$('.coll-alt .coll-alt2').on('click',function(){
  $('.infirm').css({
    'border-color': '#444444',
    'border-bottom-width': '2px' ,
    'transform': 'scale(1)'
   });
   if (w > 450) {
    $('html , body').animate({
         scrollTop : $('#top-firm').offset().top
        } , 200 );
   } else {
    $('html , body').animate({
         scrollTop : $('#top').offset().top
        } , 200 );
   }
  var btnAlt2=$(this).val();
  var firm= $(this).attr('name')
  $('#'+firm).css({
   'border-color': '#ddacaf',
   'border-bottom-width': '4px' ,
   'transform': 'scale(1.2)'
  });
  $( '.collectyons').hide();
  $( '#'+btnAlt2).slideToggle(500);
});

$('.coll-alt .coll-alt3').on('click',function(){
  $('.infirm').css({
    'border-color': '#444444',
    'border-bottom-width': '2px' ,
    'transform': 'scale(1)'
   });
   if (w > 450) {
    $('html , body').animate({
         scrollTop : $('#top-firm').offset().top
        } , 200 );
   } else {
    $('html , body').animate({
         scrollTop : $('#top').offset().top
        } , 200 );
   }
  var btnAlt3=$(this).val();
  var firm= $(this).attr('name')
  $('#'+firm).css({
   'border-color': '#ddacaf',
   'border-bottom-width': '4px' ,
   'transform': 'scale(1.2)'
  });
  $( '.collectyons').hide();
  $( '#'+btnAlt3).slideToggle(500);
});
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;
$('.coll-btn-stop').on('click',function(){
  $('.level7').fadeOut(500) ;
  $('.infirm').css({
  'border-color': '#444444',
  'border-bottom-width': '2px' ,
  'transform': 'scale(1)'
 });
 $('html , body').animate({
       scrollTop : $('.s-klubok').offset().top
      } , 250 );
  $( '.collectyons').hide();
});


$('.collectyons .coll-conteiner .coll-wrap > h4').on('click',function(){
  $('.uzer-klubok').fadeOut(300);
  if (w < 450) {
    $('.uzer-saze').fadeOut(300);
  }
    h4='';
  $('.uzer-klubok').fadeIn(300);
  var h4=$(this).attr('name');
  $('.uzer-klubok h4').text(h4);
  $('.level7').fadeOut(500) ; 
  $('.infirm').css({
  'border-color': '#444444',
  'border-bottom-width': '2px' ,
  'transform': 'scale(1)'
 });
 $('html , body').animate({
       scrollTop : $('.s-klubok').offset().top
      } , 500 );
  $('.collectyons .coll-collor').hide();

});


$('.collectyons .coll-conteiner .coll-wrap .coll-flex button').on('click',function(){
  var btn=$(this).val();
  $( '#'+btn).slideToggle(500);
});

// ---------firm--------
var mass="";


$('.infirm').on('click',function(){
  $('.infirm').css({
    'border-color': '#444444',
    'border-bottom-width': '2px' ,
    'transform': 'scale(1)'
   });
  //  $('.uzer-klubok').fadeOut(300);
   $('.level7 h3').hide() ;
   $('.collectyons').hide();
  $('.infirm').css({
  'transform': 'scale(1)'
 });
  mass="";  
 var firm= $(this).attr('name')
 $('#'+firm).css({
  'border-color': '#ddacaf',
  'border-bottom-width': '4px' ,
  'transform': 'scale(1.2)'
 });
 mass=firm;
 if (w > 450) {
  $('html , body').animate({
       scrollTop : $('.s-conteiner article').offset().top
      } , 200 );
 } else {
  $('html , body').animate({
       scrollTop : $('#top').offset().top
      } , 200 );
 }

 $('.level2').fadeIn(500) ; 

});

// -------level2--------------
$('.level2 form > input').on('click',function(){
  var l2=$(this).val();
  mass+=l2;

  if ( l2 == 'Fatazy' || 'Beby') {
    $('.level7').fadeIn(500) ;
    $('.level7 h3').show();
    $('#Erorr').hide();
    $('#'+mass).fadeIn(); 
  } 
  if( l2 == 'Klas-') {
     $('.level3').fadeIn(500) ;
     $('.level7').hide();
     $('#Erorr').show();
  }

  $('.level2').hide() ; 
});

// -------level3--------------
$('.level3 form > input').on('click',function(){
  var l3=$(this).val();
  $('html , body').animate({
       scrollTop : $('#top').offset().top
      } , 300 );

  if(l3=='Zima-'){
    $('.level4-1').fadeIn(500) ; 
  } 
  if(l3=='O-V-'){
    $('.level4-2').fadeIn(500) ;
  }
  if(l3=='Leto-'){
    $('.level4-3').fadeIn(500) ; 
  }
  mass+=l3;
$('.level3').hide() ; 
});
// -------level4--------------
$('.level4-1 form > input').on('click',function(){
  var l4=$(this).val();
  $('.level5').fadeIn(500) ;
  mass+=l4; 
  if (w > 450) {
  $('html , body').animate({
       scrollTop : $('.s-conteiner article').offset().top
      } , 300 );
 } else {
  $('html , body').animate({
       scrollTop : $('#top').offset().top
      } , 300 );
 }
$('.level4-1').fadeOut() ; 
});
$('.level4-2 form > input').on('click',function(){
  var l4=$(this).val();
  $('.level5').fadeIn(300) ;
  mass+=l4; 
  if (w > 450) {
  $('html , body').animate({
       scrollTop : $('.s-conteiner article').offset().top
      } , 300 );
 } else {
  $('html , body').animate({
       scrollTop : $('#top').offset().top
      } , 300 );
 }
$('.level4-2').fadeOut() ; 
});

$('.level4-3 form > input').on('click',function(){
  var l4=$(this).val();
  mass+=l4;   
  $('.level5').fadeIn(300) ;
  var v = $('#'+mass).attr('data-x');

  if ( l4 === 'Lon') {
    $('.level5').hide() ;  
    $('.level7').fadeIn(500) ;
    if( v == 'x') {
      $('#Erorr').hide();
      $('#'+mass).fadeIn(); 
    }
  }
  if ( l4 === 'Bambyk') {
    $('.level5').hide() ;  
    $('.level7').fadeIn(500) ;
    if( v == 'x') {
      $('#Erorr').hide();
      $('#'+mass).fadeIn(); 
    }
  }
  if ( l4 == 'Viskoz') {
    $('.level5').hide() ;  
    $('.level7').fadeIn(500) ;
    if( v == 'x') {
      $('#Erorr').hide();
      $('#'+mass).fadeIn(); 
    }
  }
  if (w > 450) {
  $('html , body').animate({
       scrollTop : $('.s-conteiner article').offset().top
      } , 300 );
 } else {
  $('html , body').animate({
       scrollTop : $('#top').offset().top
      } , 300 );
 }
$('.level4-3').fadeOut() ; 
});
// -------level5--------------
$('.level5 form > input').on('click',function(){
  var l5=$(this).val();
  $('.level6').fadeIn(500) ;
  mass+=l5; 
$('.level5').hide() ; 
});
// -------level6--------------
$('.level6 form > input').on('click',function(){
  var l6=$(this).val();
  mass+=l6;
  var a = $('#'+mass).attr('data-x');
  $('.level7').fadeIn(500) ; 
  $('.level7 h3').show();
  if( a == 'x') {
    $('#Erorr').hide();
    $('#'+mass).fadeIn();
    $('html , body').animate({
       scrollTop : $('#top').offset().top
      } , 300 ); 
  }
  $('.level6').hide() ;

});

// ----------s-saze-------------------------

  var mas2 = "";
  var i ;
  $(".saze .saze-flex > span").on('click',function(){
    $('#'+i).hide();
    var iz = $(this).attr('name');
    var sa = $(this).attr('data-y');
    mas2 = '';
    i="";
    $('.uzer-saze').hide();
    if (sa == 'a') {
      $('.saze').hide();
      $('.level11').fadeIn(500); 
    }
    if (sa == 'b') {
      $('.saze').hide();
      $('.level13').fadeIn(500); 
    }
    if (sa == 'c') {
      $('.saze').hide();
      $('.level12').fadeIn(500); 
    }
    mas2 = iz;
    $('html , body').animate({
       scrollTop : $('#top2').offset().top
      } , 350 );
  });

  $(".level11  form > input").on('click',function(){
    var l11=$(this).val();
     mas2 += l11;
     $('.level11').hide();
     $('.level14').fadeIn(800); 
  });

  $(".level12  form > input").on('click',function(){
    var l12=$(this).val();
     mas2 += l12;
     $('.level12').hide();
     $('.level14').fadeIn(800);
  });

  $(".level13  form > input").on('click',function(){
    var l13=$(this).val();
     mas2 += l13;
     $('.level13').hide();
     $('.level14').fadeIn(800);
  });

  $(".level14  form > input").on('click',function(){
    var l14=$(this).val();
     mas2 += l14;
     i = mas2;
     $('.level14').hide();
     $('#'+i).fadeIn(); 
     $('.uzer-saze').fadeIn(800);
     $('.saze').fadeIn(800);
     $('html , body').animate({
       scrollTop : $('.s-saze').offset().top
      } , 350 );
      if (w < 450) {
        $('.uzer-klubok').fadeOut(300);
      }
  });


  $('.uzer-saze .close-uz-saze').on('click',function(){  
  $('.uzer-saze').hide();
  $('#'+i).hide();
});
//   ------------ no mobil-------------
if(w > 450){ 
// ----------------slick----------
$('.cont-slid').slick({
  dots: true,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  speed: 300,               
  slidesToShow: 4,         
  slidesToScroll: 1,  
  responsive: [
    {
      breakpoint: 800,         
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1 ,
      }
    },
    {
      breakpoint: 480,         
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        dots: true
      }
    }
  ]
});
// ---------------s-review-------------

$(".d").click(function() {

  var $this=$(this),
      $rev= $this.parent().children(),
  position= $rev.index($this);

  $('.rev').removeClass('rev-active').eq(position).addClass('rev-active');
  $rev.removeClass('dots-active');
  $this.addClass('dots-active');

});
// ------------------
h_Rev();
function h_Rev(){
var h_rev = $('#2r').height();

if(h_rev >= '200' ){
$('.cont-rev').height(h_rev-'20');
}
};

}


// -----------------yxod------------------
$('.cont-slik').slick({
  dots: true,
  infinite: true,
  centerMode: false,
  speed: 300,               
  slidesToShow: 5,         
  slidesToScroll: 5,  
  responsive: [
    {
      breakpoint: 1024,        // �� 1024
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 600,         // �� 600
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,         // �� 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        centerMode: true,
        variableWidth: true,
        prevArrow : "<button class= ' prev arrow ' >&#10095;</button>",
        nextArrow : "<button class= ' next arrow ' >&#10094;</button>",
        dots: false
      }
    }
  ]
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


// -------------scrull-a ------------

    $("nav .submenu>li a").on("click", function (event) { 
        event.preventDefault();
        var id  = $(this).attr('text'),
            top = $('#'+id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

// --------nav moh-----------------
if(w <450){ 
  $('.submenu >li>a[text="review"]').hide();
  $('.submenu >li>a[text="review-ua"]').hide();
  $('.submenu >li>a[text="model"]').hide();
  $('.submenu >li>a[text="model-ua"]').hide();
}


});