---
menu: groups 2019
slug: new-groups
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
[div class="banner"]
# {{'SCHOOL.NAME'|t}}
 paspizania 2019
[/div]
<div class="summer-schedule table-responsive">
  {% set group1 = page.find("/groups19/children").url %}
  {% set group2 = page.find("/groups19/adults-advanced").url %}
  {% set group3 = page.find("/groups19/adults-beginner").url %}
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
                {{_self.groupLink( group3,'SUMMER.GROUP3.NAME'|t)}}
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
===
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
<div markdown=1 class="prices">
# Цены
Цена за занятие от <span class="price fa-stack fa-2x"><i class="fas fas fa-tag fa-stack-2x"></i><span class="icon-content fas fa-stack-1x fa-inverse">5</span></span>рублей. Цена за месяц рассчитывается непосредственно из количества занятий, проведенных в данном месяце.
<div markdown=1 class="extra-lessons">

### Дополнительные занятия:###
|  индивидуальное занятие     | занятия для 3-5 обучающихся |
|:---------------------------:|:---------------------------:|
|<span>10 рублей/1 час</span>.| <span>25 рублей/1 час<span>.|
</div>
Оплата принимается не позднее 25 числа каждого месяца (если есть острая необходимость, скорректировать дату оплаты можно поговорив с тренером)
<div markdown=1 class="discount">
###Мы также предоставляем скидку <span class="fa-stack fa-2x"><i class="fas fas fa-certificate fa-stack-2x"></i><span class="fas fa-stack-1x fa-inverse">10%</span></span>от оплаты за месяц занятий следующим обучающимся:###
 * членам одной семьи (2 и более родственника обучаются в нашей Школе)
 * многодетным семьям
 * неполным семьям
 * пенсионерам и людям с органиченными возможностями здоровья
</div>
 </div>
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
