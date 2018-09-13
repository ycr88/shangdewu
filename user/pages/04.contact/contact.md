---
menu : Контакты
slug : контакты
class : contact-page
process:
    markdown: true
    twig: true
template : default
---
# Contact and Information

## information of the school
 * telephone: {{site.phone}}
 * school email: {{site.email}}
 * adress : {{site.adress}}
    <div class="map">
    <div class="hidden-lg">
    xs
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4699.562405358196!2d27.576029577464666!3d53.91786382923635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf62804a07dd%3A0x650382f3fa21014c!2zU2hhbmdEZVd1INCo0LrQvtC70YMg0LHQvtC10LLRi9GFINC40YHQutGD0YHRgdGC0LIg0Lgg0YLRgNCw0LTQuNGG0LjQvtC90L3QvtC5INC60LjRgtCw0LnRgdC60L7QuSDQs9C40LzQvdCw0YHRgtC40LrQuA!5e0!3m2!1ses!2sby!4v1536826987024" width="250" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>

    <div class="hidden-xs hidden-sm hidden-md visible-lg-block">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.8878805237296!2d27.57401255094617!3d53.91596823949517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf62804a07dd%3A0x650382f3fa21014c!2zU2hhbmdEZVd1INCo0LrQvtC70YMg0LHQvtC10LLRi9GFINC40YHQutGD0YHRgdGC0LIg0Lgg0YLRgNCw0LTQuNGG0LjQvtC90L3QvtC5INC60LjRgtCw0LnRgdC60L7QuSDQs9C40LzQvdCw0YHRgtC40LrQuA!5e0!3m2!1ses!2sby!4v1536826431843" width="1024" height="460" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    </div>

## Our official profiles in the social networks
{% for item in site.social%}
* {{item.name}}
{% endfor%}

## legal
** ShangDeWu ** make oficially his activities in Belarus by
Индивидуальный предприниматель {{site.author.name}}
Свидетельство о государственной регистрации индивидуального предпринимателя № 193124609 от  22 авгусма 2018 года

Postal Address : {{site.post_adress}}
