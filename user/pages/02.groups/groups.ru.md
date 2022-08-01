---
menu: 'Группы 2022'
slug: nashy-gruppy
process:
    markdown: true
    twig: true
class: group
submenu: true
mainmenu: 'Набор группы'
items:
    -
        id: group-list
        title: 'Наши группы'
    -
        id: price
        title: 'Цены и скидки'
content:
  items:
    - '@self.children'
    - '@taxonomy':
         category: [group]
  filter:
    published: true
    type: 'group-item'

description: 'Школа боевых искусств ШанДэУ  предлагает занятия для всей семьи! Курсы Тайцзицюань и внутренних стилей подойдут для молодежи и взрослых, занятия по спортивному ушу ориентированы на детей и подростков. Приглашаем всех погрузиться в прекрасный мир исскусства Ушу!'
form:
    name: group-registation
    classes: form-group
    fields:
        -
            name: name
            label: Ф.И.О
            placeholder: 'Ваше Ф.И.О'
            autofocus: 'on'
            autocomplete: 'on'
            type: text
            classes: form-control
            validate:
                required: true
        -
            name: email
            label: 'Электронная почта'
            placeholder: вашего@е-мейл.адресс
            type: email
            classes: form-control
            validate:
                required: true
        -
            name: message
            type: textarea
            autofocus: true
            label: 'Напишите нам'
            classes: form-control
            placeholder: 'Вводите текст здесь'
        -
            name: g-recaptcha-response
            label: Captcha
            type: captcha
            recaptcha_not_validated: 'Captcha недействителен!'        
    buttons:
        -
            type: submit
            value: Отправить
    process:
        -
            captcha: true
        -
            email:
                subject: '[New registation] {{ form.value.name|e }}'
                to: '{{ site.email|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            message: 'Спасибо, что связались!'
        -
            reset: true
---

