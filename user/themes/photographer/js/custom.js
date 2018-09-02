$(document).ready(function(){
  $('.timeline-gallery').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          }
      }

    ]
  });
$('.timeline-gallery').slickLightbox({
    useHistoryApi: 'true'
  });

$('.slide-ligthbox').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        }
    }

  ]
});
$('.single-ligthbox').slickLightbox({
  useHistoryApi: 'true'
});
$('.slide-ligthbox').slickLightbox({
  useHistoryApi: 'true'
});


});
