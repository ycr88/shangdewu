# ShangDeWu website

![Photographer](assets/readme_1.png)


# Features

__thridParty Libraries__
  * Bootstrap 3.0
  * Photo Slider
  * Photo Gallery
  * slick - for image carrusel
  * slickLightbox
  * jsSocials for sharing post

## Page BLOG
Is the list of the post order by dateformat
      * listing page
      * template blog
      * contain default.jpg

### Post structure
      * template name item
      * for custom metadata use **"partial/postmetadata"**
      * custom headers
        ```
        slug: the-slug // use ONLY latins character
        description: 'Text of description ' // recomemded 200 characters
        author: Name OF the Autor
        header_image: example.ext // image located in the folder of the post fallback to --blog/default.jpg
        subheading: 'example subheading'
        facebookimage: image-to-facebook // name of the picture and extension(example.ext) located in the post folder or a url(canonical) of external file [1200 pixels x 627 pixels ] recomemded size
        ```
      * optional add a image name **facebook_image.jpg** to be captured for facebook debugger



**TIP:** Check out the [general Grav installation instructions](http://learn.getgrav.org/basics/installation) for more details on this process.

---

## Existing Grav site

It is possible to install just the theme, but page content will need to reference the [Photographer theme](https://github.com/getgrav/grav-theme-photographer)'s supported templates.  It is strongly advised to at least install the Photographer Skeleton package to see the theme's capabilities in action.

To install  **just** the theme:

```
$ bin/gpm install photographer
```
