---
title: Wushu Summer curse
header_image: children.jpg
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
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
