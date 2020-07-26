$(document).ready(function(){
    $('.main-slider').slick({
    //   setting-name: setting-value
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
          breakpoint: 620,
          settings: {
            arrows: false,
            slidesToShow:  1,
            slidesToScroll: 1
            // centerMode: true,
            // centerPadding: '40px',
            // slidesToShow: 3
          }
        }
      ]
    }); 
});
// mod-menu
$('.mob-menu').click(function(){  $('.menu-nav').addClass('nav-visible');});
    $('.menu-nav').click(function(){  $('.menu-nav').removeClass('nav-visible');  });