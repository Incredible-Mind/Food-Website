$(document).ready(function(){
  $('.foodie').slick({
    autoplay:true,
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:".previous-btn",
    nextArrow:".next-btn",
    responsive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2 ,
        }
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
        }
      }
    ]
  });
  $('.nav-trigger').click(function(){
    $('.side-content-wrapper').toggleClass('scaled');
  });
});