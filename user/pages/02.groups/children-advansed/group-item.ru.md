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
    1: '18:00-19:15'
    3: '17:15-18:30'
    5: '18:30-20:30'
program:
    ShiBenGong:
        name: Цзибэньгун
        system: 'Современное ушу'
        creator: ''
        description: ' Элементарные упражнения, созданные для привития и отработки навыков, необходимых для дальнейшего изучения ушу. На русский язык Цзибэньгун переводится как «базовая работа». Эти упражнения  - основа знаний начинающих спортсменов и ежедневная практика опытных ушуистов.'
        video: lD8EJ1DjJWg
    fan:
        name: 'Комплексы упражнений с веером'
        system: 'Современное ушу'
        creator: ''
        description: 'Комплексы упражнений с веером  Базовые упражнения ушу с интересным видом оружия – веером. Веер – это универсальное оружие, являющееся невероятно привлекательным благодаря своему цвету и  издаваемому звуку.'
        video: 6WtVwSxJUeg
---

{% set program = page.header.program %}
{% set training = page.find("/groups/children/training").media.images() %}
{% set activities = page.find("/groups/children/activities").media.images() %}
{% macro program(array) %}
  {% set video = "<iframe src=https://www.youtube.com/embed/" ~ array.video ~"?enablejsapi=1&loop=1&controls=2"~ ' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' %}
  <div class="program-item">
    <div class="description">
      <h1>{{array.name}}</h1>
    {% if array.system %}
    <div class="system">
      <h2>{{'GROUP.STYLE'|t}}:</h2>
      <p>{{array.system}}</p>
    </div>
  {% endif %}
      <p>{{array.description}}</p>
    </div>
    <div class="video">
    {{video}}
    </div>
  </div>
{% endmacro %}
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
## Программа курса для начинающих

{% if program %}
<div class="program">
  <div class="menu">
  </div>
  <div class="vertical-slide">
    {% for item in program %}
      {{_self.program(item)}}
    {% endfor %}
  </div>
</div>
{% endif %}
