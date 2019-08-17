---
menu: 'letto 2019'
slug: lето-2019
class: summer
process:
    markdown: true
    twig: true
content:
    items: '@self.children'
    order:
        by: default
description: 'Este verano la escuela Shangdewu ofrece la oportunidad de practicar Wushu a todo la familia.Cursos de taijiquan y estilos internos orientado a jovenes y adultos y practica de wushu deportivo para los ni;os y adolecentes. Le invitamos a conocer en familia el milenario arte de Wushu.'
visible: false
---

# enjoy the summer with wushu and taijichuan
[div class="banner"]
# {{'SCHOOL.NAME'|t}}
 paspizania leto 2019
[/div]
<div class="summer-schedule table-responsive">
  {% set group1 = page.find("/summer/children").url %}
  {% set group2 = page.find("/summer/adults-advanced").url %}
  {% set group3 = page.find("/summer/adults-beginner").url %}
  {% macro groupLink(dir, name, time)%}
    {{"<a href="~dir~">"}}
      {% if name %}
        <div class="name">{{name}}</div>
    {% endif %}
    {% if time %}
        <div class="time">{{time}}</div>
  {% endif %}
    </a>
  {% endmacro %}
  <div class="desktop">
      <table class="table table-hover">
        <thead>
          <th class="empty"><div class="empty"> </div></th> <th>Пн</th> <th>Вт</th> <th>Ср</th> <th>Чт</th> <th>Пт</th>
        </thead>
        <tbody>
          <tr class="summer-group-1">
            <th>
              {{_self.groupLink( group1,'SUMMER.GROUP1.NAME'|t)}}
            </th>
            <td>
              <div class="time">{{'SUMMER.GROUP1.TIME'|t}}</div>
            </td>
            <td>
              <div class="empty"> </div>
            </td>
            <td>
              <div class="time">{{'SUMMER.GROUP1.TIME'|t}}</div>
            </td>
            <td>
              <div class="empty"></div>
            </td>
            <td>
              <div class="empty"></div>
            </td>
          </tr>
          <tr class="summer-group-2">
              <th>
              {{_self.groupLink( group2,'SUMMER.GROUP2.NAME'|t)}}
              </th>
              <td>
                <div class="time">{{'SUMMER.GROUP2.TIME'|t}}</div>
              </td>
              <td>
                <div class="empty"></div>
              </td>
              <td>
                <div class="time">{{'SUMMER.GROUP2.TIME'|t}}</div>
              </td>
              <td>
                <div class="empty"> </div>
              </td>
              <td>
                <div class="empty"></div>
              </td>
            </tr>
            <tr class="summer-group-3">
                <th>
                {{_self.groupLink( group1,'SUMMER.GROUP3.NAME'|t)}}
                </th>
                <td>
                  <div class="empty"> </div>
                </td>
                <td>
                  <div class="time">{{'SUMMER.GROUP3.TIME'|t}}</div>
                </td>
                <td>
                  <div class="empty"> </div>
                </td>
                <td>
                  <div class="time">{{'SUMMER.GROUP3.TIME'|t}}</div>
                </td>
                <td>
                  <div class="empty"></div>
                </td>
              </tr>
        </tbody>
      </table>
  </div>
  <div class="mobile">
      <table class="table table-hover">
        <tr>
          <th>Пн</th>
          <td class="summer-group-1">
            {{_self.groupLink( group1,'SUMMER.GROUP1.NAME'|t,'SUMMER.GROUP1.TIME'|t)}}
          </td>
          <td class="summer-group-2">
            {{_self.groupLink( group2,'SUMMER.GROUP2.NAME'|t,'SUMMER.GROUP2.TIME'|t)}}
          </td>
        </tr>
        <tr>
          <th>Вт</th>
          <td class="empty"> </td>
          <td class="summer-group-3">
            {{_self.groupLink( group3,'SUMMER.GROUP3.NAME'|t,'SUMMER.GROUP3.TIME'|t)}}
          </td>
      </tr>
      <tr>
        <th>Ср</th>
        <td class="summer-group-1">
          {{_self.groupLink( group1,'SUMMER.GROUP1.NAME'|t,'SUMMER.GROUP1.TIME'|t)}}
       </td>
        <td class="summer-group-2">
          {{_self.groupLink( group2,'SUMMER.GROUP2.NAME'|t,'SUMMER.GROUP2.TIME'|t)}}
        </td>
      </tr>
      <tr>
        <th>Чт</th>
        <td class="empty"></td>
        <td class="summer-group-3">
          {{_self.groupLink( group3,'SUMMER.GROUP3.NAME'|t,'SUMMER.GROUP3.TIME'|t)}}
        </td>
    </tr>
    <tr>
      <th>Пт</th>
      <td class="empty"></td>
      <td class="empty"></td>
    </tr>
  </table>
  </div>
</div>
[div class="description"]
{{page.header.description}}
[/div]
[section  name="extra"]
[div class="intro"]
## Informacion general acerca de los Cursos.
 Estos cursos se hacen con el proposito de que los practicantes de la escuela se mantengan cercanos a la practica de wushu a la par que disfrutan de sus planes de verano y a para atraer nuevos integrantes que se unan a nuestra escuela en la practica de wushu, taiji y qigong. Los ejercicios y sistemas que se impartiran este verano seran profundizados y erfeccionados a los largo del curso regular.
[/div]
[div class="subsection inscription"]
### fill in

para inscribirse puede hacerlos llamando o enviar sms al telefono
  * <a href="tel:+375333627666"><span class="fa-li"><i class="fas fa-phone"></i></span>+375333627666 **(MTC)**<span class="phone-icon icon-viber fab fa-viber"></span></a>

si usa Viber puede enviar su mensaje al grupo
  * ["leto 2019 inscription"](#)
[/div]
[div class="subsection training-place"]
### our trainig area
Los entrenamientos son realizados en el Sala deportiva de la escuela Innovacia.

**address :** <span><i class="fas fa-map"></i> г.Минск, ул.Пугачевская, 10.</span>
<div class="gallery slider-lightbox">
  <a class="thumbnail" href="summer/hall-taijiquan.jpg" target="_blank">
    <img src="summer/hall-taijiquan.jpg" alt="">
  </a>
  <a class="thumbnail" href="summer/hall-wushu.jpg" target="_blank">
    <img src="summer/hall-wushu.jpg" alt="">
  </a>
</div>
Tambien tenemos planificados entrenamientos al aire especialmente para los grupos de adultos

<div class="gallery slider-lightbox">
  <a class="thumbnail" href="summer/outdoor.jpg" target="_blank">
    <img src="summer/outdoor.jpg" alt="">
  </a>
  <a class="thumbnail" href="summer/outdoor1.jpg" target="_blank">
    <img src="summer/outdoor1.jpg" alt="">
  </a>
</div>
y para los ninnos y jovenes ademas visitas a arenas de Batuta y otros centros deperivos para entrenamientos y enteretenimiento
<div class="gallery single-lightbox">
  <a class="thumbnail" href="summer/shangdewu-na-batuta.jpg" target="_blank">
    <img src="summer/shangdewu-na-batuta.jpg" alt="">
  </a>
</div>
[/div]
[div class="subsection wearing"]
### Equipo para el entrenamiento
La practica de wushu y Taijiquan como practica deportiva requiere de una vestimenta y calzado comodos y ligeros. En nuestra escuela tanto para hombres como para mujeres, el vesturio consiste en un pantalon deportivo y zapatillas con cordones ligeras.
<div class="gallery slider-lightbox">
  <a class="thumbnail" href="summer/wushu-training-wearing.jpg" target="_blank">
    <img src="summer/wushu-training-wearing.jpg" alt="">
  </a>
  <a class="thumbnail" href="summer/shangdewu-training-wearing.jpg" target="_blank">
    <img src="summer/shangdewu-training-wearing.jpg" alt="">
  </a>
  <a class="thumbnail" href="summer/shangdewu-training.jpg" target="_blank">
    <img src="summer/shangdewu-training.jpg" alt="">
  </a>
</div>
[/div]
[div class="subsection weapon"]
### Armas de Wushu
son instrumentos con forma y peso  similar a las usadas originalmente, con materiales duraderos como madera y acero. Pero sin elementos cortantes o punzantes.
<div class="gallery container">
  <div class="col-sm-4 col-xs-12 weapon-image single-lightbox">
    <a class="thumbnail" href="summer/wushu-fan.jpg" target="_blank">
      <img src="summer/wushu-fan.jpg" alt="">
    </a>
  </div>
  <div class="col-sm-4 col-xs-12 weapon-image single-lightbox">
    <a class="thumbnail" href="summer/wushu-sable.jpg" target="_blank">
      <img src="summer/wushu-sable.jpg" alt="">
    </a>
  </div>
  <div class="col-sm-4 col-xs-12 weapon-image single-lightbox">
    <a class="thumbnail" href="summer/wushu-gun.jpg" target="_blank">
      <img src="summer/wushu-gun.jpg" alt="">
    </a>
  </div>
</div>
[/div]
[/section]
