---
title: 'taijichuan basic curse'
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
        description: 'leyendas atribuyen este ejercicio a Boddhidharma o Damo, 28º Patriarca del Budismo Mahayana, la creación de ésta serie de 12 ejercicios muy fáciles de realizar que actúan sobre las fascias, músculos, tendones y huesos, aportando fortalecimiento a nivel físico, además de equilibrio energético que aporta calma emocional y mental.'
        video: url
    fan:
        name: Taijigongfushan
        system: 'modern wushu'
        creator: 'Prof lideyin'
        description: 'serie de ejercicios con abanico una e las aramas mas versatiles de wushu. Esta moderna forma de wushu esta esta conformada con ejecicios basicos de pupulares estilos de wushu ShalingQuan , Taijiquan, Baguazhang, Espada , sable y otros. uniendo manera armonica y elegante diversas corrientes y filosofias de wushu'
        video: url
    Taijiquan:
        name: '24 forma estilo yang'
        system: 'taijiqian estilo Yang'
        creator: ''
        description: 'Forma de taijiquan estilo Yang con Lanza. Es una forma de nivel elemtal con elegantes y bellos movimientos.'
        video: fF738LI_KRY
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
      <h2>{{'group.STYLE'|t}}:</h2>
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
## Why to practice taijiquan y qigong
Taichi qigong no es un estilo o tipo de practica. Este nombre introduce o menciona area de las tradiciones chinas. Taiqiquan es un estilo tradidional de Wushu sus tecnicas son orientadas a la defenza y el ataque. Taiqiquan es mundialmente popular por los beneficios a la salud que proporciona su practica. Qigong agrupa muchas tipos de gimnacia que han acompannado la paractica de wushu para fortalecer y elevar la energia interna del cuerpo. Este curso esta destinado a mostrar elementos basicos, donde no sera necesario ningun conocimiento previo. En nuestras practica trabajaremos nuestra coordinacion, nuestra estabilidad, haremos ejercicios de relajacion entre otros.
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
