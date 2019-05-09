# Photographer Skeleton for Grav

![Photographer](assets/readme_1.png)

This Grav theme is a port of the [Free Bootstrap 3.0 Template](http://livedemo00.template-help.com/wt_bootstrap_free_sample/index.html) by [Template Help](http://template-help.com/).

# Features

* Bootstrap 3.0
* Photo Slider
* Photo Gallery
* Various templates for presenting your content
* Modular template included
* Simple Form Support
* 2 Level custom menu
* Social Icons

## Basic Setup for a new Grav site

The simplest way to install Photographer theme for Grav is to download and install the Photographer Skeleton package:

1. [Download Photographer Skeleton](http://getgrav.org/downloads/skeletons#extras)
2. Simply unzip the package into your web root folder.
3. Point your browser at the folder, job done!

**TIP:** Check out the [general Grav installation instructions](http://learn.getgrav.org/basics/installation) for more details on this process.

---

## Existing Grav site

It is possible to install just the theme, but page content will need to reference the [Photographer theme](https://github.com/getgrav/grav-theme-photographer)'s supported templates.  It is strongly advised to at least install the Photographer Skeleton package to see the theme's capabilities in action.

To install  **just** the theme:

```
$ bin/gpm install photographer
```
# Site ShangDeWu.com

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
      subheading: 'фыыфв тлфыл олфыолтдл щ шфыщрощ щшфы лдлщфоы'
      facebookimage: image-to-facebook // name of the picture and extension(example.ext) located in the post folder or a url(canonical) of external file [1200 pixels x 627 pixels ] recomemded size
      ```
    * optional add a image name **facebook_image.jpg** to be captured for facebook debugger
