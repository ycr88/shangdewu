
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
var url = getUrl() || window.location.href;
function getUrl() {
const metas = document.getElementsByTagName('meta');
for (let i = 0; i < metas.length; i++) {
  if (metas[i].getAttribute('property') === "og:url") {

    return metas[i].getAttribute('content');
  }
}
return '';
}
fbButton.addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
        'facebook-share-dialog',
        'width=600,height=400'
    );
    return false;
});
console.log("is runing",url);
vkButton.addEventListener('click', function() {

    window.open('http://vk.com/share.php?url=' + url,"",'width=600,height=400');
 return false;
 });
});
