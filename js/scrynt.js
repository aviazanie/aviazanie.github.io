$(document).ready(function(){var o=$(window).width();setTimeout(()=>{$(".pull").css({opacity:"1"}).addClass("animation-target")},3e3),setTimeout(()=>{$(".pullA").css({opacity:"1"}).addClass(" animation-target")},6e3),setTimeout(()=>{$(".pullB").css({opacity:"1"}).addClass(" animation-target")},9e3),$(".mouse-icon ").click(function(){$(" html , body ").animate({scrollTop:$(".s-klubok ").offset().top},800)}),$(".hidden-lg").click(function(){return $(".menu-top").fadeToggle(350),$(this).toggleClass("on"),$(".main-mnu").slideToggle(),!1}),$(".botton-icon").click(function(){return $(".menu-footer").fadeToggle(350),$(this).toggleClass("on"),$(".main-mnu").slideToggle(),!1}),o>1100&&$(".menu-top,.menu-footer").on("click",function(){$(".menu-footer").fadeOut(400),$(".hidden-lg , .botton-icon").removeClass("on"),$(".main-mnu").slideToggle()}),o<1100&&$(".menu-top,.menu-footer").on("click",function(){$(".menu-top,.menu-footer").fadeOut(400),$(".hidden-lg , .botton-icon").removeClass("on"),$(".main-mnu").slideToggle()}),$(".uzer-klubok .close-uz-klubok").on("click",function(){$(".uzer-klubok").fadeOut(300),$(".collectyons").hide(),$("#Erorr").fadeIn()}),$("#Erorr strong").on("click",function(){$(".level7").fadeOut(500),$(".infirm").css({"border-color":"#444444","border-bottom-width":"2px",transform:"scale(1)"}),$("html , body").animate({scrollTop:$(".s-klubok").offset().top},250)}),$(".coll-alt .coll-alt0").on("click",function(){$(".infirm").css({"border-color":"#444444","border-bottom-width":"2px",transform:"scale(1)"}),o>450?$("html , body").animate({scrollTop:$("#top-firm").offset().top},200):$("html , body").animate({scrollTop:$("#top").offset().top},200);var e=$(this).val(),l=$(this).attr("name");$("#"+l).css({"border-color":"#ddacaf","border-bottom-width":"4px",transform:"scale(1.2)"}),$(".collectyons").hide(),$("#"+e).slideToggle(500)}),$(".coll-alt .coll-alt1").on("click",function(){$(".infirm").css({"border-color":"#444444","border-bottom-width":"2px",transform:"scale(1)"}),o>450?$("html , body").animate({scrollTop:$("#top-firm").offset().top},200):$("html , body").animate({scrollTop:$("#top").offset().top},200);var e=$(this).val(),l=$(this).attr("name");$("#"+l).css({"border-color":"#ddacaf","border-bottom-width":"4px",transform:"scale(1.2)"}),$(".collectyons").hide(),$("#"+e).slideToggle(500)}),$(".coll-alt .coll-alt2").on("click",function(){$(".infirm").css({"border-color":"#444444","border-bottom-width":"2px",transform:"scale(1)"}),o>450?$("html , body").animate({scrollTop:$("#top-firm").offset().top},200):$("html , body").animate({scrollTop:$("#top").offset().top},200);var e=$(this).val(),l=$(this).attr("name");$("#"+l).css({"border-color":"#ddacaf","border-bottom-width":"4px",transform:"scale(1.2)"}),$(".collectyons").hide(),$("#"+e).slideToggle(500)}),$(".coll-alt .coll-alt3").on("click",function(){$(".infirm").css({"border-color":"#444444","border-bottom-width":"2px",transform:"scale(1)"}),o>450?$("html , body").animate({scrollTop:$("#top-firm").offset().top},200):$("html , body").animate({scrollTop:$("#top").offset().top},200);var e=$(this).val(),l=$(this).attr("name");$("#"+l).css({"border-color":"#ddacaf","border-bottom-width":"4px",transform:"scale(1.2)"}),$(".collectyons").hide(),$("#"+e).slideToggle(500)}),$(".coll-btn-stop").on("click",function(){$(".level7").fadeOut(500),$(".infirm").css({"border-color":"#444444","border-bottom-width":"2px",transform:"scale(1)"}),$("html , body").animate({scrollTop:$(".s-klubok").offset().top},250),$(".collectyons").hide()}),$(".collectyons .coll-conteiner .coll-wrap > h4").on("click",function(){$(".uzer-klubok").fadeOut(300),o<450&&$(".uzer-saze").fadeOut(300),$(".uzer-klubok").fadeIn(300);var e=$(this).attr("name");$(".uzer-klubok h4").text(e),$(".level7").fadeOut(500),$(".infirm").css({"border-color":"#444444","border-bottom-width":"2px",transform:"scale(1)"}),$("html , body").animate({scrollTop:$(".s-klubok").offset().top},500),$(".collectyons .coll-collor").hide()}),$(".collectyons .coll-conteiner .coll-wrap .coll-flex button").on("click",function(){var o=$(this).val();$("#"+o).slideToggle(500)});var e="";$(".infirm").on("click",function(){$(".infirm").css({"border-color":"#444444","border-bottom-width":"2px",transform:"scale(1)"}),$(".level7 h3").hide(),$(".collectyons").hide(),$(".infirm").css({transform:"scale(1)"}),e="";var l=$(this).attr("name");$("#"+l).css({"border-color":"#ddacaf","border-bottom-width":"4px",transform:"scale(1.2)"}),e=l,o>450?$("html , body").animate({scrollTop:$(".s-conteiner article").offset().top},200):$("html , body").animate({scrollTop:$("#top").offset().top},200),$(".level2").fadeIn(500)}),$(".level2 form > input").on("click",function(){var o=$(this).val();e+=o,$(".level7").fadeIn(500),$(".level7 h3").show(),$("#Erorr").hide(),$("#"+e).fadeIn(),"Klas-"==o&&($(".level3").fadeIn(500),$(".level7").hide(),$("#Erorr").show()),$(".level2").hide()}),$(".level3 form > input").on("click",function(){var o=$(this).val();$("html , body").animate({scrollTop:$("#top").offset().top},300),"Zima-"==o&&$(".level4-1").fadeIn(500),"O-V-"==o&&$(".level4-2").fadeIn(500),"Leto-"==o&&$(".level4-3").fadeIn(500),e+=o,$(".level3").hide()}),$(".level4-1 form > input").on("click",function(){var l=$(this).val();$(".level5").fadeIn(500),e+=l,o>450?$("html , body").animate({scrollTop:$(".s-conteiner article").offset().top},300):$("html , body").animate({scrollTop:$("#top").offset().top},300),$(".level4-1").fadeOut()}),$(".level4-2 form > input").on("click",function(){var l=$(this).val();$(".level5").fadeIn(300),e+=l,o>450?$("html , body").animate({scrollTop:$(".s-conteiner article").offset().top},300):$("html , body").animate({scrollTop:$("#top").offset().top},300),$(".level4-2").fadeOut()}),$(".level4-3 form > input").on("click",function(){var l=$(this).val();e+=l,$(".level5").fadeIn(300);var t=$("#"+e).attr("data-x");"Lon"===l&&($(".level5").hide(),$(".level7").fadeIn(500),"x"==t&&($("#Erorr").hide(),$("#"+e).fadeIn())),"Bambyk"===l&&($(".level5").hide(),$(".level7").fadeIn(500),"x"==t&&($("#Erorr").hide(),$("#"+e).fadeIn())),"Viskoz"==l&&($(".level5").hide(),$(".level7").fadeIn(500),"x"==t&&($("#Erorr").hide(),$("#"+e).fadeIn())),o>450?$("html , body").animate({scrollTop:$(".s-conteiner article").offset().top},300):$("html , body").animate({scrollTop:$("#top").offset().top},300),$(".level4-3").fadeOut()}),$(".level5 form > input").on("click",function(){var o=$(this).val();$(".level6").fadeIn(500),e+=o,$(".level5").hide()}),$(".level6 form > input").on("click",function(){var o=$(this).val();e+=o;var l=$("#"+e).attr("data-x");$(".level7").fadeIn(500),$(".level7 h3").show(),"x"==l&&($("#Erorr").hide(),$("#"+e).fadeIn(),$("html , body").animate({scrollTop:$("#top").offset().top},300)),$(".level6").hide()});var l,t,i="";$(".saze .saze-flex > span").on("click",function(){$("#"+l).hide();var o=$(this).attr("name"),e=$(this).attr("data-y");i="",l="",$(".uzer-saze").hide(),"a"==e&&($(".saze").hide(),$(".level11").fadeIn(500)),"b"==e&&($(".saze").hide(),$(".level13").fadeIn(500)),"c"==e&&($(".saze").hide(),$(".level12").fadeIn(500)),i=o,$("html , body").animate({scrollTop:$("#top2").offset().top},350)}),$(".level11  form > input").on("click",function(){var o=$(this).val();i+=o,$(".level11").hide(),$(".level14").fadeIn(800)}),$(".level12  form > input").on("click",function(){var o=$(this).val();i+=o,$(".level12").hide(),$(".level14").fadeIn(800)}),$(".level13  form > input").on("click",function(){var o=$(this).val();i+=o,$(".level13").hide(),$(".level14").fadeIn(800)}),$(".level14  form > input").on("click",function(){var e=$(this).val();l=i+=e,$(".level14").hide(),$("#"+l).fadeIn(),$(".uzer-saze").fadeIn(800),$(".saze").fadeIn(800),$("html , body").animate({scrollTop:$(".s-saze").offset().top},350),o<450&&$(".uzer-klubok").fadeOut(300)}),$(".uzer-saze .close-uz-saze").on("click",function(){$(".uzer-saze").hide(),$("#"+l).hide()}),$(".cont-slid").slick({dots:!0,infinite:!0,centerMode:!0,variableWidth:!0,speed:300,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:800,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]}),$(".cont-slik").slick({dots:!0,infinite:!0,centerMode:!1,speed:300,slidesToShow:5,slidesToScroll:5,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,variableWidth:!0,prevArrow:"<button class= ' prev arrow ' >&#10095;</button>",nextArrow:"<button class= ' next arrow ' >&#10094;</button>",dots:!1}}]}),$(".d").click(function(){var o=$(this),e=o.parent().children(),l=e.index(o);$(".rev").removeClass("rev-active").eq(l).addClass("rev-active"),e.removeClass("dots-active"),o.addClass("dots-active")}),(t=$("#2r").height())>="200"&&$(".cont-rev").height(t-"20"),$(window).scroll(function(){$(this).scrollTop()>$(this).height()?$(".btn-up").addClass("act"):$(".btn-up").removeClass("act")}),$(".btn-up").click(function(){$("html , body").stop().animate({scrollTop:0},"slow","swing")}),$("nav .submenu>li a").on("click",function(o){o.preventDefault();var e=$(this).attr("text"),l=$("#"+e).offset().top;$("body,html").animate({scrollTop:l},1500)}),o<450&&($('.submenu >li>a[text="review"]').hide(),$('.submenu >li>a[text="review-ua"]').hide(),$('.submenu >li>a[text="model"]').hide(),$('.submenu >li>a[text="model-ua"]').hide())});