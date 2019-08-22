---
title: 'Ушу для детей и подростков: Начинающие'
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
    1: '17:30-18:50'
    3: '17:30-18:50'
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
        video: url
    Spochan:
        name: 'Спорт Чанбара (Спочан)'
        system: 'Современные боевые искусства'
        creator: 'Tsudo Tanabe'
        description: 'Этот вид спорта был создан в Японии на основе самурайского поединка. Бой в спочан - спортивный поединок на безопасном оружии. Так же как и ушу, спочан помогает детям развить навыки самообороны. Несмотря на то, что этот вид спорта является полноконтактным, однако он абсолютно физически безопасен. Тренировки для детей проходят в игровой манере, но в полном соответствии со спортивной программой.  На сегодняшний день спочан – это молодой, но активно развивающийся вид спорта, доступный всем желающим заниматься вне зависимости от пола и возраста '
        video: fF738LI_KRY
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
