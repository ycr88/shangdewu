
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

var MyJs_shares_conf = {
  "twitter":{
    label: "Tweet",
    logo: "fab fa-twitter",
    shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
    countUrl: ""
  },
  facebook: {
    label: "Like",
    logo: "fab fa-facebook",
    shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
    countUrl: "https://graph.facebook.com/?id={url}",
    getCount: function(data) {
      return data.share && data.share.share_count || 0;
    }
  },

  vkontakte: {
    label: "Like",
    logo: "fab fa-vk",
    shareUrl: "https://vk.com/share.php?url={url}&title={title}&description={text}",
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
    shareIn: "self"
  },

  whatsapp: {
    label: "WhatsApp",
    logo: "fab fa-whatsapp",
    shareUrl: "whatsapp://send?text={url} {text}",
    countUrl: "",
    shareIn: "self"
  },

  line: {
    label: "LINE",
    logo: "fab fa-line",
    shareUrl: "http://line.me/R/msg/text/?{text} {url}",
    countUrl: ""
  },
  viber: {
    label: "Viber",
    logo: "fab fa-viber",
    shareUrl: "viber://forward?text={url} {text}",
    countUrl: "",
    shareIn: "self"
  },
  messenger: {
    label: "Share",
    logo: "far fa-comment-alt",
    shareUrl: "fb-messenger://share?link={url}",
    countUrl: "",
    shareIn: "self"
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
})
$(".js_social").jsSocials({
            text:"",
            shares: ["facebook","vkontakte","pinterest"],
            showLabel: false,
            showCount: false,
          });
        });
