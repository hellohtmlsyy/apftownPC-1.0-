/*jquery*/
$(document).ready(function(){
      /*固定头部*/
      var headHeight=$(".header").height();
      var nav=$(".nav");
      $(window).scroll(function(){
        if($(this).scrollTop()>headHeight){
          nav.addClass("nav-affix");
        }
        else{
        nav.removeClass("nav-affix");
        }
      });
     
      /*导航菜单弹出层*/
      $(".emba-nav5").mouseenter(function(){
        $(this).find(".emba-nav5h").show();
        $(this).find("i").removeClass("icon-angle-right");
        $(this).find("i").addClass("icon-angle-left");
      });
      $(".emba-nav5").mouseleave(function(){
        $(this).find(".emba-nav5h").hide();
        $(this).find("i").removeClass("icon-angle-left");
        $(this).find("i").addClass("icon-angle-right");
      });
      /*按钮动画效果*/
      $(".btn-ban-titv1").mouseenter(function(){
        $(this).find("i:first").stop();
        $(this).find("i:last").stop();
        $(this).find("i:first").show();
        $(this).find("i:last").removeClass("col-h-blue");
        $(this).find("i:last").addClass("col-white");
        $(this).find("i:first").animate({
          left:'200px',
        });
        $(this).find("i:last").animate({
          right:'30px',
        });
      });
      $(".btn-ban-titv1").mouseleave(function(){
        $(this).find("i:first").stop();
        $(this).find("i:last").stop();
        $(this).find("i:last").removeClass("col-white");
        $(this).find("i:last").addClass("col-h-blue");
         $(this).find("i:first").animate({
          left:'100px',
        });
         $(this).find("i:last").animate({
          right:'0px',
        });
         $(this).find("i:first").hide();
      });
      $(".btn-ban-titv2").mouseenter(function(){
        $(this).find("i:first").stop();
        $(this).find("i:last").stop();
        $(this).find("i:first").show();
        $(this).find("i:first").animate({
          left:'200px',
        });
        $(this).find("i:last").animate({
          right:'30px',
        });
      });
      $(".btn-ban-titv2").mouseleave(function(){
        $(this).find("i:first").stop();
        $(this).find("i:last").stop();
         $(this).find("i:first").animate({
          left:'100px',
        });
         $(this).find("i:last").animate({
          right:'0px',
        });
         $(this).find("i:first").hide();
      });
      /*视频方面*/
      $(".emba-video,.vid-close").mouseenter(function(){
        $(".vid-close").show();
      });
      $(".emba-video,.vid-close").mouseleave(function(){
        $(".vid-close").hide();
      });
      $(".vid-close").click(function(){
        $(".emba-video").attr({
        "src" : "#",
          });
      });
      $(".vid-imgv1").click(function(){
        $(".emba-vid").removeClass("vid-bgv3");
        $(".emba-vid").removeClass("vid-bgv4");
        $(".emba-vid").addClass("vid-bgv2");
        $(".emba-video").attr({"src" : "../../img/edu-emba/movie2.mp4",});
      });
      $(".vid-imgv2").click(function(){
        $(".emba-vid").removeClass("vid-bgv2");
        $(".emba-vid").removeClass("vid-bgv4");
        $(".emba-vid").addClass("vid-bgv3");
        $(".emba-video").attr({"src" : "../../img/edu-emba/movie2.mp4",});
      });
      $(".vid-imgv3").click(function(){
        $(".emba-vid").removeClass("vid-bgv2");
        $(".emba-vid").removeClass("vid-bgv3");
        $(".emba-vid").addClass("vid-bgv4");
        $(".emba-video").attr({"src" : "../../img/edu-emba/movie2.mp4",});
      });
    });
    
/* 显示或隐藏效果开始 */
    $(document).ready(function(){
      $("#hide1").click(function(){
        $(".lxb-container1").hide();
        $(".lxb-close-btn").show();
      });
      $(".lxb-close-btn").click(function(){
        $(".lxb-container1").show();
        $(".lxb-close-btn").hide();
      });
      $("#hide2").click(function(){
        $(".lxb-container2").hide();
      });
      $(".right_float_inner4").click(function(){
        $(".right_float").show();
        $(".right_float_inner4").hide();
      });
      $(".clctit").click("slow",function(){
        $(".right_float").hide();
        $(".right_float_inner4").show();
      });
      $(".lxb-cb-input").click(function(){
        $(".box7").show();
         $(".box8").hide();
      });
      $("#hide3").click(function(){
        $(".box7").hide();
      });
      $(".lxb-cb-input-btn").click(function(){
        $(".box8").show();
         $(".box7").hide();
      });
      $("#hide4").click(function(){
        $(".box8").hide();
      });
    });
/* 显示或隐藏效果结束 */

/* 延迟出现开始 */
setTimeout("delay1.style.visibility='visible'",1000);
setTimeout("delay2.style.visibility='visible'",2000);
setTimeout("delay3.style.visibility='visible'",5000);
/* 延迟出现结束 */


/*jqueryend*/
/*Swiper声明*/
  /*banner Swiper*/
var Swiperv1 = new Swiper('.swiper-containerv1', {
        pagination: '.swiper-paginationv1',
        paginationClickable: true,
        autoplay : 10000,
        speed:600,
        loop : true,
});
  /*EMBA学员swiper*/
var Swiperv2 = new Swiper('.swiper-containerv2', {
        pagination: '.swiper-paginationv2',
        paginationClickable: true,
        autoplay : 4000,
        speed:600,
        loop : true,
        effect : 'flip',
})
var Swiperv3 = new Swiper('.swiper-containerv3', {
        loop : true,
        effect : 'fade',
})
Swiperv2.params.control = Swiperv3;
Swiperv3.params.control = Swiperv2;      
  /*EMBA学员swiper*/
var Swiperv4 = new Swiper('.swiper-containerv4', {
        pagination: '.swiper-paginationv4',
        paginationClickable: true,
        autoplay : 4000,
        speed:600,
        loop : true,
        effect : 'coverflow',
        slidesPerView:2,
        centeredSlides: true,
        coverflow: {
                    rotate: 30,
                    stretch: 10,
                    depth: 60,
                    modifier: 2,
                    slideShadows : true
                }
})
var Swiperv5 = new Swiper('.swiper-containerv5', {
        loop : true,
        effect : 'cube',
})
Swiperv4.params.control = Swiperv5;
Swiperv5.params.control = Swiperv4;  

var mySwiper = new Swiper('.swiper-container',{
  effect:'fade',
  autoplay:2000,
  speed:1000,
  loop:true,
  autoplayDisableOnInteraction : false,
});