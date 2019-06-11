---
title: taijichuan basic curse
header_image: basic.jpg
process:
    markdown: true
    twig: true
program:
  qigong:
    name: "YIjingjin"
    system: "jianShenqigong"
    creator: "Federacion jianShenqigong"
    description: "TRadicional serie de ejericios que data de mas, orientada a canalizar la energia para el fortalecimieto de los musculos y tendones del cuerpo humano"
    video: "url"
  fan:
    name: "Taijigongfushan"
    system: "modern wushu"
    creator: "Prof lideyin"
    description: "serie de ejercicios abanico Tijigongfushang, consituido con movimientos tradicionales estilos de wushu internos y externos. uniendo manera armonica y elegante diversas corrientes y filosofias de wushu"
    video: "url"
  Taijiquan:
    name: "24 forma estilo yang"
    system: "taijiqian estilo Yang"
    creator: ""
    description: "Forma de taijiquan estilo Yang con Lanza. Es una forma de nivel elemtal con elegantes y bellos movimientos."
    video: fF738LI_KRY
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

* gtsts
* as
* asas
* as

| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |

## Series y Rutinas que estudiaremos
{% macro program(array) %}
  {% set video = "<iframe src=https://www.youtube.com/embed/" ~ array.video ~ ' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' %}
  <div class="program-item">
    <div class="description">
      <h2>{{array.name}}</h2>
      <p>{{array.system}}</p>
      <hr>
      <p>{{array.description}}</p>
    </div>
    <div class="video">
    {{video}}
    </div>
  <div>
{% endmacro %}

{% set program = page.header.program %}
{% if program %}
<div class="program">
  <ul class="styledList">
    {% for item in program %}
      <li>{{_self.program(item)}}
    </li>
    {% endfor %}
  </ul>
</div>
{% endif %}
