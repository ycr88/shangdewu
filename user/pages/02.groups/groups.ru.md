---
menu: 'Группы 2019'
slug: nashy-gruppy
process:
    markdown: true
    twig: true
class: group
submenu: true
mainmenu: Расписание
items:
    -
        id: group-list
        title: 'Наши группы'
    -
        id: price
        title: 'Цены и скидки'
content:
    items: '@self.children'
    order:
        by: default
description: 'Школа боевых искусств ШанДэУ  предлагает занятия для всей семьи! Курсы Тайцзицюань и внутренних стилей подойдут для молодежи и взрослых, занятия по спортивному ушу ориентированы на детей и подростков. Приглашаем всех погрузиться в прекрасный мир исскусства Ушу!'
---

[div class="banner"]
# Расписание 2019
[/div]
<div class="group-schedule table-responsive">
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
          {% for group in taxonomy.findTaxonomy({'category':'group'})%}
             {% set data = "GROUP.#{group.header.id}"|upper %}
               <tr class="{{group.header.class}}">
                  <th>
                    {{_self.groupLink( group.url, "#{data}.NAME"|t)}}
                  </th>
                  {% for key  in range(1,6)|keys %}
                    {% if group.header.time[key + 1] %}
                  <td>
                    <div class="time">{{group.header.time[key + 1]}}</div>
                  </td>
                  {% else %}
                  <td>
                    <div class="empty"></div>
                  </td>
                  {% endif %}
                  {% endfor %}
                </tr>
          {% endfor %}
        </tbody>
      </table>
  </div>
  <div class="mobile">
      <table class="table table-hover">
        {% for key in range(1,6)|keys %}
        <tr>
          <th>{{"DAYS_OF_THE_WEEK.SHORT.#{key}"|t}}</th>
            {% for group in taxonomy.findTaxonomy({'category':'group'})%}
            {% set data = "GROUP.#{group.header.id}"|upper %}
            {% if group.header.time[key + 1] %}
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
{% set special = page.find("/free-lesson")%}
{% if special %}
<section class="special">
  <a href="free-lesson">
  <div class="post {{special.header.body_classes}}">
    {% set image = special.url(true)~"/"~special.header.header_image %}
     {{'<header class="intro-header" style="background-image: url('~ image ~')">'}}
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="post-heading">
                        <h1>{{ special.title }}</h1>
                        {% if special.header.subheading %}
                        <h2 class="subheading">{{ special.header.subheading }}</h2>
                        {% endif %}
                        {% if special.header.autor %}
                        <span class="meta">{{ 'BLOG.POST_BY'|t }} {{ special.header.author }}
                          {% endif %}
                    </div>
                </div>
            </div>
        </div>
    </header>
  </div>
</a>
</section>
{% endif %}
===
[div class="description"]
{{page.header.description}}
[/div]
[section  name="extra"]
## Общая информация
[div class="subsection inscription"]
### Запись в группу
Для того, чтобы записаться на курс позвоните или отправьте смс по номеру:
  * <a href="tel:+375333627666"><span class="fa-li"><i class="fas fa-phone"></i></span>+375333627666 **(MTC)**<span class="phone-icon icon-viber fab fa-viber"></span></a>

Также можно отправить сообщение в группу в Viber:
  * ["ShangdeWu Viber Comunity"](https://invite.viber.com/?g2=AQBRfEE5RaC4HUoljKHKzhh0gOgx%2Bf0yckdKJ7LQ6yvCkQ6tgoaJfA%2B6EuoeX9v%2B)
[/div]
[div class="subsection training-place"]
### Место тренировок
Занятия проходят в спортивном зале Международной школы "Инновация".

**Адрес:** <span><i class="fas fa-map"></i> г.Минск, ул.Пугачевская, 10.</span>
<div class="gallery slider-lightbox">
  <a class="thumbnail" href="groups/hall-taijiquan.jpg" target="_blank">
    <img src="groups/hall-taijiquan.jpg" alt="">
  </a>
  <a class="thumbnail" href="groups/hall-wushu.jpg" target="_blank">
    <img src="groups/hall-wushu.jpg" alt="">
  </a>
</div>
В нашей Школе часто проводятся развлекательные мероприятия, семинары, соревнования и конкурсы.
<div class="gallery single-lightbox">
  <a class="thumbnail" href="groups/shangdewu-na-batuta.jpg" target="_blank">
    <img src="groups/shangdewu-na-batuta.jpg" alt="">
  </a>
</div>
[/div]
[div class="subsection wearing"]
### Одежда для занятий
Для наших занятий подходит легкая спортивная одежда. Предпочтительны футболка, спортивные штаны и обувь со шнурками.
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
### Оружие Ушу
Спортивное оружие ушу в большинстве случаев выполненно из дерева и металла. Однако, современное оружие не является колющим и режущим, что обеспечивает безопасность на занятии.
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
