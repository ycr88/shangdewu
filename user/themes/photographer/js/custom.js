$(document).ready(function(){
  $('.timeline-gallery').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });
  $('.timeline-gallery').slickLightbox({
    useHistoryApi: 'true'
  });
});
