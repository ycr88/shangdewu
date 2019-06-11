---
title: Wushu Summer curse
header_image: children.jpg
process:
    markdown: true
    twig: true
program:
    ShiBenGong:
      name: "ShibenGong"
      system: "Wushu Moderno"
      creator: ""
      description: " Ejercicios elementales que crean y mejoran las habilidades necesarias para la practica de wushu su traducion es trabajo basico la piedra angular del futuro practicante de wushu y el dia a dia del practicante con experiencia "
      video: "url"
    fan:
      name: "Wushu fan"
      system: "wushu moderno"
      creator: ""
      description: "Elemtos basicos de wushu con la intersante arma de wushu Abanico un arma muy versatil de gran tractivo por su sonido, colorido y sus singulares movimientos."
      video: "url"
    Spochan:
      name: "Sport Chanbara"
      system: "Artes Marciales modernas"
      creator: "Tsudo Tanabe"
      description: "Es llamado el deporte del samuray. modalidad de combate con tecnica espadas creado en Japon por un maestro samurai. Con instrumentos con materiales que no causan traumas en los practicantes, Porque junto con wushu?, porque resulta manera de ensennar a los ninnos a principios basicos defenderse sin causar traumas fisicos, lo cual brida a las familias tranquilidad, los ninnos se diverten durante la practica, cuenta con un serio programa deportivo en belarus y a nivel internacional "
      video: fF738LI_KRY
---

## quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

* gtsts
* as
* asas
* as

| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## En los entrenamientos
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
