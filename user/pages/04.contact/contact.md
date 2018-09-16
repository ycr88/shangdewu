---
menu : Контакты
Title: Контакты
slug : контакты
class : page-contact
process:
    markdown: true
    twig: true
template : default
---
# Контакты и информация

## Информация о Школе
<div markdown="1" class="contact ">
<div markdown="1" class="list fa-ul">
* [<span class="fa-li"><i class="fas fa-phone"></i></span>** Телефон: ** {{site.phone}}<span class="phone-icon icon-mtc">
![mtc](/images/mtc.png)</span><span class="phone-icon icon-viber fab fa-viber"></span>][phone]
*  [<span class="fa-li"><i class="far fa-envelope"></i></span>** Наш e-mail: ** {{site.email}}][mail]
* <a><span class="fa-li"><i class="far fa-map"></i></span> ** Адрес:** {{site.address}}</a>

 [phone]: tel:{{site.phone}}
 [mail]: mailto:{{site.email}}
</div>
<div class="map">
  <div class="hidden-lg">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4699.562405358196!2d27.576029577464666!3d53.91786382923635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf62804a07dd%3A0x650382f3fa21014c!2zU2hhbmdEZVd1INCo0LrQvtC70YMg0LHQvtC10LLRi9GFINC40YHQutGD0YHRgdGC0LIg0Lgg0YLRgNCw0LTQuNGG0LjQvtC90L3QvtC5INC60LjRgtCw0LnRgdC60L7QuSDQs9C40LzQvdCw0YHRgtC40LrQuA!5e0!3m2!1ses!2sby!4v1536826987024" width="250" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
  <div class="hidden-xs hidden-sm hidden-md visible-lg-block">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.8878805237296!2d27.57401255094617!3d53.91596823949517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf62804a07dd%3A0x650382f3fa21014c!2zU2hhbmdEZVd1INCo0LrQvtC70YMg0LHQvtC10LLRi9GFINC40YHQutGD0YHRgdGC0LIg0Lgg0YLRgNCw0LTQuNGG0LjQvtC90L3QvtC5INC60LjRgtCw0LnRgdC60L7QuSDQs9C40LzQvdCw0YHRgtC40LrQuA!5e0!3m2!1ses!2sby!4v1536826431843" width="1024" height="460" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</div>  
  </div>
[div markdown="0" class="social"]
## Наши официальные страницы в социальных сетях
  <ul>
    {% for item in site.social%}
    {% set a='<a href="'~url(item.url)~'" target="_blank"><span class="fa-stack fa-2x">
  <i class="fas fa-circle fa-stack-2x"></i><i class="'~item.icon~' fa-stack-1x fa-inverse"></i></span><span class="name">'~item.name~'</span><span class="url">'~item.url~'</span></a>'%}
    <li>{{a}}</li>
    {% endfor %}
</ul>
[/div]
## Официальная информация
ShangDeWu официально зарегистринована в Беларуси
Индивидуальный предприниматель {{site.author.name}}<br>
Свидетельство о государственной регистрации индивидуального предпринимателя №193124609 от  22 августа 2018года

Почтовый адрес: {{site.post_address}}
