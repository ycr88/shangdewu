---
title: Site Blog
menu: Blog
subheading: main page with post list
header_image: home-bg.jpg

content:
    items: @self.children
    order:
        by: date
        dir: desc
    limit: 4
    pagination: true

pagination: true
---
