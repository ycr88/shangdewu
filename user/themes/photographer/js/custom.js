// POST commands to YouTube or Vimeo API
function postMessageToPlayer(player, command){
  if (player == null || command == null) return;
  player.contentWindow.postMessage(JSON.stringify(command), "*");
}
function playPauseVideo(slick, control){
  var currentSlide, slideType, startTime, player, video;
  currentSlide = slick.find(".slick-current");
  player = currentSlide.find("iframe").get(0);
  startTime = currentSlide.data("video-start");

  switch (control) {
    case "play":
      postMessageToPlayer(player, {
        "event": "command",
        "func": "mute"
      });
      postMessageToPlayer(player, {
        "event": "command",
        "func": "playVideo"
      });
      break;
    case "pause":
      postMessageToPlayer(player, {
        "event": "command",
        "func": "pauseVideo"
      });
      break;
  }
}
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
$('.vertical-slide').slick({
  infinite: false,
  //slidesToShow: 1,
  //slidesToScroll: 1,
  arrows:false,
//  vertical:true,
//  verticalSwiping:true,
  adaptiveHeight: true,
  dots: true,
});
$('.vertical-slide').on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"pause");
  });
$('.single-lightbox').slickLightbox({
  useHistoryApi: 'true'
});
$('.slider-lightbox').slickLightbox({
  useHistoryApi: 'true'
});
$('.post-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode: true,
  centerPadding: '60px',
  responsive: [
    {
      breakpoint: 979,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 561,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

var vk_image = document.getElementsByTagName("META")["vk:image"] ? document.getElementsByTagName("META")["vk:image"].content : null;
var MyJs_shares_conf = {
  "twitter":{
    label: "Tweet",
    logo: "fab fa-twitter",
    shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
    countUrl: "",
    css: "mobile"
  },
  facebook: {
    label: "Like",
    logo: "fab fa-facebook-f",
    shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
    countUrl: "https://graph.facebook.com/?id={url}",
    getCount: function(data) {
      return data.share && data.share.share_count || 0;
    }
  },

  vkontakte: {
    label: "Like",
    logo: "fab fa-vk",
    media: vk_image,
    shareUrl: "https://vk.com/share.php?url={url}&image={media}",
    countUrl: "https://vk.com/share.php?act=count&index=1&url={url}",
    getCount: function(data) {
      return parseInt(data.slice(15, -2).split(', ')[1]);
    }
  },

  googleplus: {
    label: "+1",
    logo: "fab fa-google-plus-g",
    shareUrl: "https://plus.google.com/share?url={url}",
    countUrl: ""
  },

  linkedin: {
    label: "Share",
    logo: "fab fa-linkedin",
    shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}",
    countUrl: "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
    getCount: function(data) {
      return data.count;
    }
  },

  pinterest: {
    label: "Pin it",
    logo: "fab fa-pinterest",
    shareUrl: "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
    countUrl: "https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",
    getCount: function(data) {
      return data.count;
    }
  },
  telegram: {
    label: "Telegram",
    logo: "fab fa-telegram",
    shareUrl: "tg://msg?text={url} {text}",
    countUrl: "",
    shareIn: "self",
    css: "mobile"
  },

  whatsapp: {
    label: "WhatsApp",
    logo: "fab fa-whatsapp",
    shareUrl: "whatsapp://send?text={url} {text}",
    countUrl: "",
    shareIn: "self",
    css: "mobile"
  },

  line: {
    label: "LINE",
    logo: "fab fa-line",
    shareUrl: "http://line.me/R/msg/text/?{text} {url}",
    countUrl: "",
    css: "mobile"
  },
  viber: {
    label: "Viber",
    logo: "fab fa-viber",
    shareUrl: "viber://forward?text={url} {text}",
    countUrl: "",
    shareIn: "self",
    css: "mobile"
  },
  messenger: {
    label: "Share",
    logo: "fab fa-facebook-messenger",
    shareUrl: "fb-messenger://share?link={url}",
    countUrl: "",
    shareIn: "self",
    css: "mobile"
  },
  rss: {
    label: "RSS",
    logo: "fas fa-rss",
    shareUrl: "/feeds/",
    countUrl: "",
    shareIn: "blank"
  }
};
$.each(MyJs_shares_conf,function(a,b){
  jsSocials.setDefaults(a , b
    );
});

// change url of vk share
$(".js-social").jsSocials({
            text:"",
            shares: ["facebook","vkontakte","pinterest","linkedin","twitter","email","messenger","viber","whatsapp","telegram","line"],
            showLabel: false,
            showCount: false,
          });
});
