---
title: 'Wushu for children'
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
        name: ShibenGong
        system: 'Wushu Moderno'
        creator: ''
        description: ' Ejercicios elementales que crean y mejoran las habilidades necesarias para la practica de wushu su traducion es trabajo basico la piedra angular del futuro practicante de wushu y el dia a dia del practicante con experiencia '
        video: url
    fan:
        name: 'Wushu fan'
        system: 'wushu moderno'
        creator: ''
        description: 'Elemtos basicos de wushu con la intersante arma de wushu Abanico un arma muy versatil de gran tractivo por su sonido, colorido y sus singulares movimientos.'
        video: url
    Spochan:
        name: 'Sport Chanbara'
        system: 'Artes Marciales modernas'
        creator: 'Tsudo Tanabe'
        description: 'Es llamado el deporte del samuray. modalidad de combate con tecnica espadas creado en Japon por un maestro samurai. Con instrumentos y materiales que no causan traumas en los practicantes, Porque junto con wushu?, porque resulta manera de ensennar a los ninnos los principios basicos defenderse sin causar traumas fisicos, lo cual brida a las familias tranquilidad, los ninnos se diverten durante la practica, cuenta con un serio programa deportivo en belarus y a nivel internacional '
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
La practica de wushu puede comenzar entre los 4 y 5 annos de edad, con la practica de wushu disiplinan no solo sus cuerpo tambien su caracter y sus pensamientos en este curso entrenamientos estan dirigidos a unir los ninnos de todos las edades y  niveles y elevar las condiciones fisicas, aprender habilidades de diferentes estilos.
  {{_self.gallery(training, "slide-fade")}}
## Wushu para ninnos y adolecentes
  Actividedes recreativas, juegos, concursos y otras atracciones acomapnnaran nuerstra paractica.
{{_self.gallery(activities, "slide-fade")}}
[/div]
## En los entrenamientos

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
