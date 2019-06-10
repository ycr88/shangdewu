---
title: taijichuan advanced curse
header_image: advanced.jpg
process:
    markdown: true
    twig: true
program:
  daoying:
    name: "XindiXIyu"
    system: "DaoyingYangShenGong"
    creator: "ZhangGuande"
    description: "Как метод гимнастики, Дао Инь способствует укреплению физического и энергетического тела, делает его молодым, сильным, гибким и чувствительным при сохранении внутренней концентрации."
    video: "fF738LI_KRY"
  qigong:
    name: "lianggong2"
    system: "LianGOngShipaFa"
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
 Los ejercicios y series requieren un conocimietos basico de wushu taijiquan y qigong, esta planificado el estudio de formas complejas en codinacion y cantidad de ejercicios y elementos tecnicos. Todos destinados a una mantener una correcta y saludable forma fisica y mental estos ejercicios pueden ser realizados tanto en casa como al aire libre. Estos cursos incluiran ejercios con manos libres, y con armas de Wushu rutinas de abanico y rutinas con Lanza.
 [//]:#(TODO Slide con fotos)
## Equipo para el entrenamiento
  La practica de wushu y Taijiquan como cualquien practica deportiva requiere de una vestimenta y calzado comodos y ligeros. en nuestra escuela. tanto hombres como mujeres, el vesturio consiste en un pantalon deportivo y zapatillas con cordones ligeras.
  [//]:# (TODO Fotos con ropa de practica)
### Armas de Wushu
   son instrumentos con figura y peso  similar a las usadas originalmente, con materiales duraderos como madera y acero. Pero sin elementos cortantes o punzantes.
  * abanico
  * Lanza

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
