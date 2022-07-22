# MCT Blog

This is the repository for the blog of the [University of Oslo (UiO)](https://www.uio.no/english/) international master's programme in [Music, Communication and Technology (MCT)](https://www.uio.no/english/studies/programmes/mct-master/) offered by the [Department of Musicology](https://www.hf.uio.no/imv/english/).

To learn how to use the blog, and much more, visit our **[Full Documentation and Guides.](https://github.com/MCT-master/Guides/wiki/How-to-use-the-MCT-Blog)**

# Quick Guide

## Table of Contents

1. [Serve the Blog Locally](#1-serve-the-blog-locally)
2. [Post Layout and Placement](#2-post-layout-and-placement)
   - [Folders](#folders)
   - [File name](#file-name)
   - [Frontmatter](#frontmatter)
3. [Embedding Multi-media](#3-embedding-multi-media)
   - [Links](#links)
   - [Images](#images)
   - [Slideshow](#slideshow)
   - [Videos](#videos)
   - [Audio](#audio)
4. [Tables](#4-tables)
   - [Standard HTML Tables](#standard-html-tables)
   - [Responsive HTML Tables](#responsive-html-tables)
   - [Markdown Tables](#markdown-tables)
5. [Improvements and Issues](#issues-and-improvements)

## 1. Serve the Blog Locally

You can serve the MCT blog locally on your machine using Jekyll. First, you need to install Ruby and Bundler as dependencies. For more details and instructions on how to set up the environment, visit [these Jekyll tutorials](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/).

Once you have your Jekyll environment set up, you can serve from the root blog folder using this command in the terminal:

```
bundle exec jekyll serve
```

## 2. Post Layout and Placement

Every blog post markdown file should share the same general layout and folder placement.

### Folders

**Drafts**
Posts placed in the `_posts_drafts` will not be published on the blog. Use this folder for drafts and collaboratory efforts. **NB!** Files in the drafts folder are frequently deleted (once every semester) for maintenance reasons.

**Ready Posts**
Posts placed in the `_posts` folder are automatically published to the blog once you push the repo to GitHub, given they have correct file names and front matter.

### File name

All posts must share the same filename syntax:

```
YYYY-MM-DD-UiOusername-shortVersionOfTitle.md
```

Example:

```
2022-04-02-aleksati-5g-nmp.md
```

### Frontmatter

The top of every blog post markdown file must include _frontmatter_. The frontmatter includes important information related to your blog post.

```markdown
---
layout: post
title: "Title of the blog post"
date: YYYY-MM-DD HH:MM:SS Z
categories: category-name
author: Name1 Surname1, Name2 Surname2
image: /assets/image/featured_image.jpg
keywords: comma, separated, list, of, keywords
excerpt: "A short summary, typically copy-pasting the first paragraph of the blog post."
---
```

Example:

```markdown
---
layout: post
title: "5G Networked Music Performances - Will It Work?"
date: 2022-04-11 10:30:00 +0200
categories: portal
author: Aleksander Tidemann
image: /assets/image/2022_04_01_aleksati_5g_telenor_logo.png
keywords: mct, uio, networked music performances, telematic music, 5g, telenor research, lola, jacktrip, audio latency, video latency
excerpt: "In collaboration with Telenor Research, we explored the prospects of doing networked music performances over 5G. Here are the preliminary results."
---
```

## 3. Embedding Multi-media

### Links

Links are text that redirects the reader to a different web address.

```
[text](url)
```

Example:

```
[Blix Solutions AS](https://www.blix.com/servers/)
```

### Images

The best way to add images and figures to a blog post is to use and wrap a HTML `<img/>` element inside a `<figure/>` container:

```HTML
<figure style="float: none">
   <img
      src="PATH-TO-IMAGE"
      alt="Alternative Text"
      title="Image Title"
      width="auto" />
   <figcaption>Caption Text</figcaption>
</figure>
```

The `style="float: none"` can be used to specify the horizontal alignment of the figure and the caption. To do this, simply specify `right`, `left` or `none` (for middle) in the space following `float: `.

It is also possible to add images using Markdown:

```markdown
![Alternate Text](PATH-TO-IMAGE "Image Title")
```

### Slideshow

To show more than one image at a particular place, you can combine multiple images into a slideshow. To add a slideshow to your blog post, use the following HTML structure:

```html
<!-- Include in blog post: -->
<div class="slideshow-container" id="ID-OF-MY-SLIDESHOW">
  <div class="mySlides fade">
    <!-- Insert Figure with Img -->
  </div>
  <div class="mySlides fade">
    <!-- Insert Figure with Img -->
  </div>
  <div class="mySlides fade">
    <!-- Insert Figure with Img -->
  </div>
  <!-- .... -->
  <!-- .... -->
</div>
```

**NB!** It is important that to specify a unique ID property for every slideshow. Use a clear and informative name.

You can add as many slideshow items as you want, just remember to wrap each item like so:

```html
<div class="mySlides fade">
  <!-- Insert Figure or other content -->
</div>
```

Each slideshow has a max height of 480px. Therefore, to ensure the best possible user experience, make all slideshow images should have a height equal to or larger than 480px.

### Videos

The best way to add videos to a blog post is to wrap an `<iframe/>` element inside a `<figure/>` container. We strongly recommend to use third-party service like YouTube or Vimeo to host the videos. This will enhance performance and reduce the load time of a blog post.

```html
<figure style="float: none">
  <iframe src="PATH-TO-VIDEO" width="auto" frameborder="0" allowfullscreen>
  </iframe>
  <figcaption>Caption Text</figcaption>
</figure>
```

Example:

```html
<figure style="float: none">
  <iframe
    src="https://www.youtube.com/embed/WGTF7fL8w-Q"
    width="100%"
    height="315"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  >
  </iframe>
  <figcaption>Caption Text</figcaption>
</figure>
```

### Audio

Currently, the best way to add an audio player to a blog post is to wrap a `<audio/>` element inside a `<figure/` container.

```html
<figure style="float: none">
  <audio controls>
    <source src="PATH-TO-AUDIO" type="audio/mpeg" />
    Alternate Text
  </audio>
  <figcaption>Text Caption</figcaption>
</figure>
```

## 4. Tables

There are three ways you can add tables to your blog post. let's explore the three alternative ways to generate this table:

<table>
  <tr>
    <!-- Another Row -->
    <td>hey</td>
    <td>hey</td>
    <td>hey</td>
  </tr>
  <tr>
    <!-- Another Row -->
    <td>hey</td>
    <td>hey</td>
    <td>hey</td>
  </tr>
</table>

### Standard HTML Tables

The standard way to create HTML tables is to use the `<table />` element. You will find a bunch of resources online detailing how to use and customize such tables.

```html
<table>
  <tr>
    <!-- Row -->
    <td>hey</td>
    <td>hey</td>
    <td>hey</td>
  </tr>
  <tr>
    <!-- Another Row -->
    <td>hey</td>
    <td>hey</td>
    <td>hey</td>
  </tr>
</table>
```

### Responsive HTML Tables

The best way to add a table to a blog post is to use our responsive tables. Responsive tables are great because they will resize and re-organize themselves to fit different media screens. In other words, your tables will look good both on mobile and desktop devices.

To use responsive tables, wrap multiple `<div class="Rtable-cell"/>` inside a `<div class="Rtable Rtable--3cols Rtable--collapse" />` container, like so:

```html
<div class="Rtable Rtable--3cols Rtable--collapse">
  <!-- Column one -->
  <div style="order:1;" class="Rtable-cell">Hey></div>
  <div style="order:2;" class="Rtable-cell">Hey</div>

  <!-- Column two -->
  <div style="order:1;" class="Rtable-cell">Hey</div>
  <div style="order:2;" class="Rtable-cell">Hey</div>

  <!-- Column three -->
  <div style="order:1;" class="Rtable-cell">Hey</div>
  <div style="order:2;" class="Rtable-cell">Hey</div>
</div>
```

In the container `<div>`, we specify the number of columns our table has with the `Rtable--3cols` class.

In every cell, `<div class="Rtable-cell"/>`, we specify an `"order:"` style attribute. This number represents the vertical order of the cells in our table, from top to bottom. For example, compare the top code with the code below. Both represent the same table.

```html
<div class="Rtable Rtable--3cols Rtable--collapse">
  <!-- Row one -->
  <div style="order:1;" class="Rtable-cell">hey</div>
  <div style="order:1;" class="Rtable-cell">hey</div>
  <div style="order:1;" class="Rtable-cell">hey</div>

  <!-- Row two -->
  <div style="order:2;" class="Rtable-cell">hey</div>
  <div style="order:2;" class="Rtable-cell">hey</div>
  <div style="order:2;" class="Rtable-cell">hey</div>
</div>
```

To learn more about how to use and customize these kinds of responsive tables, visit [this great resource](https://css-tricks.com/accessible-simple-responsive-tables/).

### Markdown Tables

You can also use markdown to generate tables in a blog post.

```markdown
| Hey | Hey | Hey |
| --- | --- | --- |
| Hey | Hey | Hey |
```

You can use websites that allow you to generate the markdown code automatically, like [this page](https://www.tablesgenerator.com/markdown_tables).

## Issues and Improvements

Fixing bugs, improving existing features or adding new ones are activities continuously carried out by users of the MCT Blog. If you find anything wrong or if you have suggestions, open an issue in the blog repository and include appropriate labels. If you [open an issue](https://github.com/MCT-master/mct-master.github.io/issues), you should also take the lead or contribute towards resolving it.

For more information about the blog and how to use it, visit our **[Full Documentation and Guides.](https://github.com/MCT-master/Guides/wiki/How-to-use-the-MCT-Blog)**.
