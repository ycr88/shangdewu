
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

var fbButton = document.getElementById('fb-share-button');
var vkButton= document.getElementById('vk-share-button');
var url = window.location.href;
fbButton.addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
        'facebook-share-dialog',
        'width=600,height=400'
    );
    return false;
});
vkButton.addEventListener('click', function() {
    window.open('http://vk.com/share.php?url=' + url,"",'width=600,height=400');
 return false;
 });
});
