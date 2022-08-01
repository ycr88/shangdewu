---
title: 'taijichuan advanced curse'
taxonomy:
    category:
        - group
process:
    markdown: true
    twig: true
header_image: advanced.jpg
class: 'group group-adults-advanced'
id: adults-advanced
time:
    1: '19:15-20:30'
    3: '19:15-20:30'
    6: '10:30-12:30'
program:
   - adult-advanced
---
{% set training = page.find("/groups/adults-advanced/training").media.images() %}
{% macro gallery(data, type ="") %}
{{ '<div class="gallery '~ type ~' ">'}}
{% for item in data %}
{{'<img src="'~item.cache.url()~'" alt="">'}}
{% endfor %}
{{'</div>'}}
{% endmacro %}
## Добро пожаловать на наш курс!
    Для выполнения комплексов упражнений этого курса необходимо владеть базовыми знаниями по ушу, тайцзицюань или цигун. Планируется изучение комплексов повышенной сложности, большое количество упражнений и технических элементов. Задача данного курса - поддержание правильной и здоровой физической и психологической формы у практикующих. Эти упражнения можно выполнять как в зале или дома, так и на улице. Этот курс включат в себя элементы без спортивного инвентаря, а также комплексы с оружием ушу (веер, копье и др.).
{{ _self.gallery(training,"slide-fade")}}
