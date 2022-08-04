---
title: 'Ушу для детей: Начинающие'
media_order: children.jpg
taxonomy:
    category:
        - group
process:
    markdown: true
    twig: true
header_image: children.jpg
class: 'group group-children-starter'
id: children-starter
time:
    1: '17:30-18:30'
    3: '17:30-18:30'
    2: '18:30-19:30'
    4: '18:30-19:30'
    6: '13:30-14:30'
program:
    - wushu-basic
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
Дети могут начинать занимать ушу в возрасте 4-5 лет. Во время практики данного вида боевого искусства ребенок не только улучшает свою физическую форму, но и укрепляет характер, учится дисциплине.
  {{_self.gallery(training, "slide-fade")}}
В нашей Школе часто проводятся развлекательные мероприятия, семинары, соревнования и конкурсы.
{{_self.gallery(activities, "slide-fade")}}