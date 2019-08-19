---
title: 'Взрослые начинающие'
taxonomy:
    category:
        - group
process:
    markdown: true
    twig: true
header_image: basic.jpg
class: 'group group-adults-starter'
id: adults-starter
time:
    2: '19:15-20:45'
    4: '19:15-20:45'
    6: '10:00-11:30'
program:
    qigong:
        name: YIjingjin
        system: jianShenqigong
        creator: 'Federacion jianShenqigong'
        description: 'Легенды связывают это упражнение с Бодхидхармой или Дамо, 28-м патриархом буддизма Махаяны. Данный комплекс состоит из 12-ти очень простых в выполнении упражнений, которые воздействуют на фасции, мышцы, сухожилия и кости, укрепляя их на физическом уровне, а также обеспечивая энергетический баланс, что приносит эмоциональное и душевное спокойствие.'
        video: WOoxI3nD89A
    fan:
        name: Taijigongfushan
        system: 'modern wushu'
        creator: 'Prof lideyin'
        description: 'Комплекс упражнений с веером. Веер – одно из самых универсальных оружий в ушу. Этот современный комплекс представляет собой сочетание базовых элементов из таких известных стилей ушу как Шаолинцюань, Тайцзицюань, Багуачжан, а также элементы искусства владения коротким и длинным оружием. Таким образом, этот уникальный компекс'
        video: '-ovcPjxtIMo'
    Taijiquan:
        name: '24 форма тайцзицюань'
        system: 'taijiqian estilo Yang'
        creator: ''
        description: 'представляет собой упрощённый и изменённый вариант тайцзицюань, разработанный Министерством спорта КНР в 1956 году. Данный комплекс формальных упражнений (таолу) состоит из 24-х движений, поэтому и называется "24 форма тайцзицюань"..'
        video: e4VIw41R-PU
---

{% set program = page.header.program %}
{% set  training = page.find("/groups/adults-beginner/training").media.images() %}
{% macro gallery(data, type ="") %}
{{ '<div class="gallery '~ type ~' ">'}}
{% for item in data %}
{{'<img src="'~item.cache.url()~'" alt="">'}}
{% endfor %}
{{'</div>'}}
{% endmacro %}
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

[div class="header"]
## Что могут дать Вам занятия Тайцзицюань и Цигун?
    Тайцзицюань – это один из традиционных стилей ушу. В основном он ориентирован на атаку и защиту во время боя. Этот стилю популярен во всем мире благодаря оздоравливающему эффукту/ влиянию на организм практикующегося. Цигун включает в себя множество различных типов упражнений, которые вместе с практикой Тайчи служат для поддержания здоровья и жизненной энергии.
    Данный курс позволит Вам освоить базовые элементы ТайцзиЦюань и Цигун без какой-либо предварительной подготовки. На наших занятиях мы уделяем особое внимание работе над координацией, стабильностью, проведению релаксационных упражнений.

[/div]
{{ _self.gallery(training, "slide-fade")}}
## Series y Rutinas que estudiaremos
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
