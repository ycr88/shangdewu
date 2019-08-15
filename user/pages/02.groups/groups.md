---
menu: groups 2019
slug: our-groups
class: group
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
<div class="group-schedule table-responsive">
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
 {% set empty = "empty"%}
 {% set divEmpty = '<div class="empty"> </div>'%}
   <div class="desktop">
      <table class="table table-hover">
        <thead>
          <th class="empty"><div class="empty"> </div></th>
          {% for key in range(1,6)|keys %}
                <th>{{"DAYS_OF_THE_WEEK.SHORT.#{key}"|t}}</th>
          {% endfor %}
        </thead>
        <tbody>
          {% for group in page.collection %}
            {% if group.header.taxionomy == "group" %}
              {% set data = "GROUP.#{group.header.id}"|upper %}
               <tr class="{{group.header.class}}">
                  <th>
                    {{_self.groupLink( group.url, "#{data}.NAME"|t)}}
                  </th>
                  {% for key  in range(1,6)|keys %}
                    {% if group.header.time[key + 1] %}
                  <td>
                    <div class="time">{{"#{data}.TIME"|t}}</div>
                  </td>
                  {% else %}
                  <td>
                    <div class="empty"></div>
                  </td>
                  {% endif %}
                  {% endfor %}
                </tr>
            {% endif %}
          {% endfor %}
        </tbody>
      </table>
  </div>
  <div class="mobile">
      <table class="table table-hover">
        {% for key in range(1,6)|keys %}
        <tr>
          <th>{{"DAYS_OF_THE_WEEK.SHORT.#{key}"|t}}</th>
          {% for group in page.collection %}
            {% set data = "GROUP.#{group.header.id}"|upper %}
            {% if group.header.taxionomy == "group" and group.header.time[key + 1] %}
            <td class="{{group.header.class}}">
              {{_self.groupLink( group.url, "#{data}.NAME"|t, group.header.time[key + 1] )}}
            </td>
            {% else %}
                <td class="empty"> </td>
            {% endif %}
          {% endfor %}
        </tr>
        {% endfor %}
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
<div markdown=1 id="price" class="price">
# Цены
Цена за занятие от <span class="price-tag fa-stack fa-2x"><i class="fas fas fa-tag fa-stack-2x"></i><span class="icon-content fas fa-stack-1x fa-inverse">5</span></span>рублей. Цена за месяц рассчитывается непосредственно из количества занятий, проведенных в данном месяце.
<div class="continer">
  <div class="col-md-4 col-xs-12">
    <div class="name">
      <h2>Single lesson</h2>
    </div>
    <div class="amount">
      <p>7 <span>/BYN</span> </p>
      <p class="text">{{'GROUP.PAYMENT.PER_LESSON'}}</p>
    </div>
  </div>
  <div class="payment payment-per-month payment-per-month-8 col-md-4 col-xs-12">
    <div class="name">
      <h2>ABonado</h2>
    </div>
    <div class="amount">
      <p>50<span>/BYN</span> </p>
      <p class="text">{{'GROUP.PAYMENT.MONTHLY_8'}}</p>
    </div>
  </div>
  <div class="payment payment-per-month payment-per-month-full col-md-4 col-xs-12">
    <div class="name">
      <h2>Abonado</h2>
    </div>
    <div class="amount">
      <p>60<span>/BYN</span> </p>
      <p class="text">{{'GROUP.PAYMENT.MONTHLY_FULL'}}</p>
    </div>
  </div>
</div>
  <div markdown=1 class="extra-lessons">
  ### Дополнительные занятия:###
  |  индивидуальное занятие     | занятия для 3-5 обучающихся |
  |:---------------------------:|:---------------------------:|
  |<span>10 рублей/1 час</span>.| <span>25 рублей/1 час<span>.|
  </div>
  Оплата принимается не позднее 25 числа каждого месяца (если есть острая необходимость, скорректировать дату оплаты можно поговорив с тренером)
  <div markdown=1 id="discount" class="discount">
  ###Мы также предоставляем скидку <span class="fa-stack fa-2x"><i class="fas fas fa-certificate fa-stack-2x"></i><span class="fas fa-stack-1x fa-inverse">10%</span></span>от оплаты за месяц занятий следующим обучающимся:###
   * членам одной семьи (2 и более родственника обучаются в нашей Школе)
   * многодетным семьям
   * неполным семьям
   * пенсионерам и людям с повышенными потребностями
  </div>
</div>
### our trainig area
Los entrenamientos son realizados en el Sala deportiva de la escuela Innovacia.

**address :** <span><i class="fas fa-map"></i> г.Минск, ул.Пугачевская, 10.</span>
<div class="gallery slider-lightbox">
  <a class="thumbnail" href="groups/hall-taijiquan.jpg" target="_blank">
    <img src="groups/hall-taijiquan.jpg" alt="">
  </a>
  <a class="thumbnail" href="groups/hall-wushu.jpg" target="_blank">
    <img src="groups/hall-wushu.jpg" alt="">
  </a>
</div>
Tambien tenemos planificados entrenamientos al aire especialmente para los grupos de adultos

<div class="gallery slider-lightbox">
  <a class="thumbnail" href="groups/outdoor.jpg" target="_blank">
    <img src="groups/outdoor.jpg" alt="">
  </a>
  <a class="thumbnail" href="groups/outdoor1.jpg" target="_blank">
    <img src="groups/outdoor1.jpg" alt="">
  </a>
</div>
y para los ninnos y jovenes ademas visitas a arenas de Batuta y otros centros deperivos para entrenamientos y enteretenimiento
<div class="gallery single-lightbox">
  <a class="thumbnail" href="groups/shangdewu-na-batuta.jpg" target="_blank">
    <img src="groups/shangdewu-na-batuta.jpg" alt="">
  </a>
</div>
[/div]
[div class="subsection wearing"]
### Equipo para el entrenamiento
La practica de wushu y Taijiquan como practica deportiva requiere de una vestimenta y calzado comodos y ligeros. En nuestra escuela tanto para hombres como para mujeres, el vesturio consiste en un pantalon deportivo y zapatillas con cordones ligeras.
<div class="gallery slider-lightbox">
  <a class="thumbnail" href="groups/wushu-training-wearing.jpg" target="_blank">
    <img src="groups/wushu-training-wearing.jpg" alt="">
  </a>
  <a class="thumbnail" href="groups/shangdewu-training-wearing.jpg" target="_blank">
    <img src="groups/shangdewu-training-wearing.jpg" alt="">
  </a>
  <a class="thumbnail" href="groups/shangdewu-training.jpg" target="_blank">
    <img src="groups/shangdewu-training.jpg" alt="">
  </a>
</div>
[/div]
[div class="subsection weapon"]
### Armas de Wushu
son instrumentos con forma y peso  similar a las usadas originalmente, con materiales duraderos como madera y acero. Pero sin elementos cortantes o punzantes.
<div class="gallery container">
  <div class="col-sm-4 col-xs-12 weapon-image single-lightbox">
    <a class="thumbnail" href="groups/wushu-fan.jpg" target="_blank">
      <img src="groups/wushu-fan.jpg" alt="">
    </a>
  </div>
  <div class="col-sm-4 col-xs-12 weapon-image single-lightbox">
    <a class="thumbnail" href="groups/wushu-sable.jpg" target="_blank">
      <img src="groups/wushu-sable.jpg" alt="">
    </a>
  </div>
  <div class="col-sm-4 col-xs-12 weapon-image single-lightbox">
    <a class="thumbnail" href="groups/wushu-gun.jpg" target="_blank">
      <img src="groups/wushu-gun.jpg" alt="">
    </a>
  </div>
</div>
[/div]
[/section]
