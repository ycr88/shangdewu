---
taxonomy:
    category:
        - price
process:
    markdown: true
    twig: true
routable: false
visible: false
template: price
payment:
    -
        name: PER_LESSON
        ammount: 15
        title: 'Разовое занятие'
        description: 'за 1 занятие'
    -
        name: MONTHLY_8
        ammount: 'от 80'
        title: 'Абонемент ¨Новый Набор¨'
        description: 'до 10 занятий в месяц + костюмы и обувь'
    -
        name: MONTHLY_FULL
        ammount: 'от 70'
        title: 'Абонемент ¨Продолжающие¨'
        description: 'Безлимитные занятия + инвентарь*'
---

{% set payments = page.header.payment %}
<section  markdown=1 id="price" class="price row">
## Цены
<div class="price-list">  
  {% for payment in payments %}
  <div class="{{payment.name}} price-item">
    <div class="title">
      <p>{{payment.title}}</p>
    </div>    
    <div class="ammount">
      <div class="symbol"></div>
      <div><p>{{payment.ammount}}</p><span>BYN</span></div>
    </div>
    <div class="description">
      <p>{{payment.description}}</p>
    </div>
  </div>
  {% endfor %}
  <p><span>*</span>Для учеников, занимающихся больше 1 года в школе </p>
  <h3>Одежда и инвентарь</h3>
  Все Абонементы включают в себя форму для тенировок, обувь, костюм для выступлений и соревнований, а также спортивный инвентарь.
Костюмы и инвентарь для ушу предоставляются Школой для личного пользования учеников на занятиях. 

</div>
<div markdown=1 class="extra-lessons">
### Дополнительные занятия:###
|  индивидуальное занятие     | занятия для группы до 3-х обучающихся |
|:---------------------------:|:---------------------------:|
|<span>20 рублей/1 час</span>.| <span>40 рублей/1 час<span>.|
</div>
<div markdown=1 id="discount" class="discount">
### Мы также предоставляем скидку <span class="fa-stack fa-2x"><i class="fas fas fa-certificate fa-stack-2x"></i><span class="fas fa-stack-1x fa-inverse">10%</span></span>от оплаты за месяц занятий следующим обучающимся:###
* членам одной семьи (2 и более родственника обучаются в нашей Школе)
* многодетным семьям
* неполным семьям
* пенсионерам и людям с повышенными потребностями
* обучащимся в нашей Школе более 1 года
</div>
</section>
