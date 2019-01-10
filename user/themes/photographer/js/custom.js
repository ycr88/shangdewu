
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

$('.slider-lightbox').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
$('.single-lightbox').slickLightbox({
  useHistoryApi: 'true'
});
$('.slider-lightbox').slickLightbox({
  useHistoryApi: 'true'
});


});
