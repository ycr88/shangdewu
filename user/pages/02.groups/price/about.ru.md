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
---

<section  markdown=1 id="price" class="price row">
## Цены
Цена за занятие от <span class="price-tag fa-stack fa-2x"><i class="fas fas fa-tag fa-stack-2x"></i><span class="icon-content fas fa-stack-1x fa-inverse">5</span></span>рублей. Цена за месяц рассчитывается непосредственно из количества занятий, проведенных в данном месяце.
<div class="continer">
  <div class="col-md-4 col-xs-12">
    <div class="name">
      <h2>Single lesson</h2>
    </div>
    <div class="amount">
      <p>7 <span>/BYN</span> </p>
      <p class="text">{{'GROUP.PAYMENT.PER_LESSON'|t}}</p>
    </div>
  </div>
  <div class="payment payment-per-month payment-per-month-8 col-md-4 col-xs-12">
    <div class="name">
      <h2>ABonado</h2>
    </div>
    <div class="amount">
      <p>50<span>/BYN</span> </p>
      <p class="text">{{('GROUP.PAYMENT.MONTHLY_8'|t)}}</p>
    </div>
  </div>
  <div class="payment payment-per-month payment-per-month-full col-md-4 col-xs-12">
    <div class="name">
      <h2>Abonado</h2>
    </div>
    <div class="amount">
      <p>60<span>/BYN</span> </p>
      <p class="text">{{'GROUP.PAYMENT.MONTHLY_FULL'|t}}</p>
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
### Мы также предоставляем скидку <span class="fa-stack fa-2x"><i class="fas fas fa-certificate fa-stack-2x"></i><span class="fas fa-stack-1x fa-inverse">10%</span></span>от оплаты за месяц занятий следующим обучающимся:###
* членам одной семьи (2 и более родственника обучаются в нашей Школе)
* многодетным семьям
* неполным семьям
* пенсионерам и людям с повышенными потребностями
</div>
</section>
