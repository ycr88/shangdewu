---
title: 'Ушу для детей и подростков： 9 лет Плюс'
media_order: Children.jpg
taxonomy:
    category:
        - group
body_classes: ' group Children '
process:
    markdown: true
    twig: true
header_image: Children.jpg
class: 'group group-children-starter'
id: children-advanced
time:
    2: '18:30-19:30'
    4: '18:30-20:30'
    6: '12:30-13:30'
program:
    - wushu-advanced
---


{% set training = page.find("/groups/children/training").media.images() %}
{% set activities = page.find("/groups/children/activities").media.images() %}

{% macro gallery(data, type ="") %}
{{ '<div class="gallery '~ type ~' ">'}}
{% for item in data %}
{{'<img src="'~item.cache.url()~'" alt="">'}}
{% endfor %}
{{'</div>'}}
{% endmacro %}
[div class="header"]
Дети могут начинать занимать ушу в возрасте 4-5 лет. Во время практики данного вида боевого искусства ребенок не только улучшает свою физическую форму, но и укрепляет характер, учится дисциплине.
  {{_self.gallery(training, "slide-fade")}}
  В нашей Школе часто проводятся развлекательные мероприятия, семинары, соревнования и конкурсы.
{{_self.gallery(activities, "slide-fade")}}
[/div]



