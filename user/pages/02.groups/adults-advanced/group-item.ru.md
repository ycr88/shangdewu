---
title: 'taijichuan advanced curse'
taxonomy:
    category:
        - group
process:
    markdown: true
    twig: true
header_image: advanced.jpg
class: 'group group-adults-advanced'
id: adults-advanced
time:
    1: '19:15-20:45'
    3: '19:15-20:45'
    6: '10:00-11:30'
program:
    daoying:
        name: '形体诗韵 Синти шиюнь'
        system: 'Даоинь Яншен Гун'
        creator: ZhangGuande
        description: 'Как метод гимнастики, Даоинь способствует укреплению физического и энергетического тела, делает его молодым, сильным, гибким и чувствительным при сохранении внутренней концентрации.'
        video: vwYTFRqeKoM
    qigong:
        name: '后十八法 Хоу шибафа'
        system: 'Ляньгун шибафа'
        creator: ZuanYangMing
        description: 'Хоу шибафа - это второй комплекс из системы оздоровительной гимнастики Ляньгун шибафа. Данный комплекс упражнений создан травматологом на основе карты Магуанди. Этот комплекс подходит для выполнения в небольшом пространстве и в короткое время (6-12 минут).'
        video: c50PoDwydHw
    fan:
        name: '夕阳美太极功夫扇 Сиян мэй Тайцзи гунфушань'
        system: 'Современное ушу'
        creator: null
        description: 'Второй комплекс упражнений, созданный Ли Дэинь, - упражнения с веером Тайцзи гунфушань. Данный комплекс включает движения из многих традиционный стилей ушу.'
        video: _Ceq2H-huHg
    Taijiqiang:
        name: '十六式太极枪 16 форм Тайцзи с копьём '
        system: 'Современное ушу'
        creator: null
        description: 'Комплекс Тайцзи стиля Ян с копьём. Данный комплекс упражнений элементарного уровня с элегантными прекрасными движениями.'
        video: ylbxdofGrEA
---

{% set program = page.header.program %}
{% set training = page.find("/groups/adults-advanced/training").media.images() %}
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
## Добро пожаловать на наш курс!
    Для выполнения комплексов упражнений этого курса необходимо владеть базовыми знаниями по ушу, тайцзицюань или цигун. Планируется изучение комплексов повышенной сложности, большое количество упражнений и технических элементов. Задача данного курса - поддержание правильной и здоровой физической и психологической формы у практикующих. Эти упражнения можно выполнять как в зале или дома, так и на улице. Этот курс включат в себя элементы без спортивного инвентаря, а также комплексы с оружием ушу (веер, копье и др.).
[/div]
{{ _self.gallery(training,"slide-fade")}}
## Программа курса
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
