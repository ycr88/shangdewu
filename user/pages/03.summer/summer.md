---
menu: letto 2019
slug: lето-2019
class: summer
process:
    markdown: true
    twig: true
content:
    items: "@self.children"
    order:
      by: default
description: "Este verano la escuela Shangdewu ofrece la oportunidad de practicar Wushu a todo la familia.Cursos de taijiquan y estilos internos orientado a jovenes y adultos y practica de wushu deportivo para los ni;os y adolecentes. Le invitamos a conocer en familia el milenario arte de Wushu."
---
# enjoy the summer with wushu and taijichuan
[div class="banner"]
# {{'SCHOOL.NAME'|t}}
 paspizania leto 2019
[/div]
[//]: # ( TODO use unpublish-date formatter)
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
* address: {{site.address}}
* contact: {{site.phone}}
[//]: # ( FIXME twig expression are not rended in the shortcode section)
[section  name="extra"]
## Informacion general acerca de los Cursos.
 Estos cursos se hacen con el proposito de que los practicantes de la escuela se mantengan cercanos a la practica de wushu a la par que disfrutan de sus planes de verano y a para atraer nuevos integrantes que se unan a nuestra escuela en la practica de wushu, taiji y qigong. Los ejercicios y sistemas que se impartiran este verano seran profundizados y erfeccionados a los largo del curso regular.

[div class="inscription"]
### fill in
  * para inscribirse puede hacerlos llamando o enviar sms al telefono
    + <a href="tel:+375333627666"><span  class="fa-li"><i class="fas fa-phone"></i></span>+375333627666 **(MTC)**<span class="phone-icon icon-viber fab fa-viber"></span></a>.
  * si usa Viber puede enviar su mensaje al grupo ["leto 2019 inscription"](#)
[/div]
[div class="training-place"]
### our trainig area
Los entrenamientos son realizados en el Sala deportiva de la escuela Innovacia.

**address :** <span><i class="fas fa-map"></i> г.Минск, ул.Пугачевская, 10.</span>
[//]: # (" TODO FOtos")
![fotos hall](#)

Tambien tenemos planificados entrenamientos al aire libre en el caso del los grupos de adultos
![fotos outdoor](#)

y para los ninnos y jovenes ademas visitas a arenas de Batuta para entrenamientos y entrenamiento

![fotos batuta](#)
[/div]
[/section]
