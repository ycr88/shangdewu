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
    - name: PER_LESSON
      ammount: 8
      title: "Разовое занятие (до декября 2021)"
      description: "за 1 занятие"
    - name: MONTHLY_8 
      ammount: 60
      title: "Абоненмент “Стандарт”"
      description: "8 занятий в месяц (2 раза в неделю)"       
    - name: MONTHLY_FULL
      ammount: 65
      title: "Абонемент “Безлимит”"
      description: "Безлимитные занятия в течение месяца"
    - name: FAMILY_FULL
      ammount: 160
      title: "Абонемент для семьи из 3-х человек"
      description: "Безлимитные занятия в течение месяца"
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
