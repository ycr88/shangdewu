---
title: taijichuan advanced curse
header_image: advanced.jpg
class: "summer-group summer-adults-advanced"
process:
    markdown: true
    twig: true
program:
  daoying:
    name: "XindiXIyu"
    system: "Daoying YangShenGong"
    creator: "ZhangGuande"
    description: "Как метод гимнастики, Дао Инь способствует укреплению физического и энергетического тела, делает его молодым, сильным, гибким и чувствительным при сохранении внутренней концентрации."
    video: "fF738LI_KRY"
  qigong:
    name: "lianggong2"
    system: "LianGOng ShipaFa"
    creator: "ZuanYangMing"
    description: "Creado por un traumatologo basado inspirado en los conocimientos del mapa de maguandi una seria de ejercicios que se adecua para realizar en lugares de poco espacio en cortos espacios de tiempo"
    video: "url"
  fan:
    name: "xiyanmei"
    system: "modern wushu"
    creator: "lideyin"
    description: "Segunda serie de ejercicios abanico Tijigongfushang creados por este maestro, consituido con movimientos de muchos tradicionales estilos de wushu"
    video: "url"
  Taijiqiang:
    name: "Taiji con lanza forma 16"
    system: "modern wushu"
    creator: "lideyin"
    description: "Forma de taijiquan estilo Yang con Lanza. Es una forma de nivel elemtal con elegantes y bellos movimientos."
    video: fF738LI_KRY
---
[div class="header"]
## Bienvenido a nuertro curso
En este curso los ejercicios y series requieren un conocimietos basico de wushu taijiquan o qigong, esta planificado el estudio de formas con cierta complejidad en coodinacion, cantidad de ejercicios y elementos tecnicos. Todos destinados a una mantener una correcta y saludable forma fisica y mental en los practicantes. Estos ejercicios pueden ser realizados tanto en casa como al aire libre. Estos cursos incluiran ejercicios con manos libres, y con armas de Wushu como son rutinas de abanico y rutinas con Lanza.

![Slide](fotos)
[/div]

## Series y Rutinas que estudiaremos
{% macro program(array) %}
  {% set video = "<iframe src=https://www.youtube.com/embed/" ~ array.video ~"?enablejsapi=1&loop=1&controls=2"~ ' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' %}
  <div class="program-item">
    <div class="description">
      <h1>{{array.name}}</h1>
    {% if array.system %}
    <div class="system">
      <h2>{{'SUMMER.STYLE'|t}}:</h2>
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
{% set program = page.header.program %}
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
