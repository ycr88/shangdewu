---
title: Wushu Summer curse
header_image: children.jpg
class: "summer-group summer-children"
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
      description: "Es llamado el deporte del samuray. modalidad de combate con tecnica espadas creado en Japon por un maestro samurai. Con instrumentos y materiales que no causan traumas en los practicantes, Porque junto con wushu?, porque resulta manera de ensennar a los ninnos los principios basicos defenderse sin causar traumas fisicos, lo cual brida a las familias tranquilidad, los ninnos se diverten durante la practica, cuenta con un serio programa deportivo en belarus y a nivel internacional "
      video: fF738LI_KRY
---
[div class="header"]
La practica de wushu puede comenzar entre los 4 y 5 annos de edad, con la practica de wushu disiplinan no solo sus cuerpo tambien su caracter y sus pensamientos en este curso entrenamientos estan dirigidos a unir los ninnos de todos las edades y  niveles y elevar las condiciones fisicas, aprender habilidades de diferentes estilos.
[div class="media"]
![Fotos ninnos](url)
[/div]
  ## Wushu para ninnos y adolecentes
  Actividedes recreativas, juegos, concursos y otras atracciones acomapnnaran nuerstra paractica.
  [div class="media"]
  ![Fotos actividades](http)
  [/div]
[/div]
## En los entrenamientos
{% macro program(array) %}
  {% set video = "<iframe src=https://www.youtube.com/embed/" ~ array.video ~ ' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' %}
  <div class="program-item">
    <div class="description">
      <h1>{{array.name}}</h1>
    {% if array.system %}
            <p>{{array.system}}</p>
  {% endif %}
      <hr>
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
  <ul class="styledList">
    {% for item in program %}
      <li>{{_self.program(item)}}
    </li>
    {% endfor %}
  </ul>
</div>
{% endif %}
