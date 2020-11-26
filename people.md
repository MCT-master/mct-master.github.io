---
layout: page
title: People
permalink: /people/
---

On this page you can find information about current and past students. Directly below are class lists with links to each student's blog pages, where you can see all posts authored by that student.

# Current and past students

<div class="student-list">
  <h2>2018-2020</h2>
  <details>
    <summary><h4>UiO, Oslo</h4></summary>
    <a href="/authors/eliasandersen.html">Elias Andersen</a>
    <a href="/authors/marilesteberg.html">Mari Lesteberg</a>
    <a href="/authors/samroman.html">Sam Roman</a>
    <a href="/authors/ashanesilva.html">Ashane Silva</a>
    <a href="/authors/guysion.html">Guy Sion</a>
    <a href="/authors/espenwik.html">Espen Wik</a>
  </details>
  <details>
    <summary><h4>NTNU, Trondheim</h4></summary>
    <a href="/authors/eigilaandahl.html">Eigil Aandahl</a>
    <a href="/authors/eirikdahl.html">Eirik Dahl</a>
    <a href="/authors/sepehrhaghighi.html">Sepehr Haghighi</a>
    <a href="/authors/karolinajawad.html">Karolina Jawad</a>
    <a href="/authors/shreejayshrestha.html">Shreejay Shrestha</a>
    <a href="/authors/jørgenvarpe.html">Jørgen Varpe</a>
  </details>

  <h2>2019-2021</h2>
  <details>
    <summary><h4>UiO, Oslo</h4></summary>
    <a href="/authors/thomasanda.html">Thomas Anda</a>
    <a href="/authors/jacksongoode.html">Jackson Goode</a>
    <a href="/authors/paulkoenig.html">Paul Koenig</a>
    <a href="/authors/rayamluna.html">Rayam Luna</a>
    <a href="/authors/jarlesteinhovden.html">Jarle Steinhovden</a>
    <a href="/authors/aleksandertidemann.html">Aleksander Tidemann</a>
    <a href="/authors/gautewardenær.html">Gaute Wardenær</a>
  </details>
  <details>
    <summary><h4>NTNU, Trondheim</h4></summary>
    <a href="/authors/ulrikhalmoy.html">Ulrik Halmøy</a>
    <a href="/authors/tomignatius.html">Tom Ignatius</a>
    <a href="/authors/thibaultjaccard.html">Thibault Jaccard</a>
    <a href="/authors/simonsandvik.html">Simon Sandvik</a>
  </details>

  <h2>2020-2022</h2>
  <details>
    <summary><h4>UiO, Oslo</h4></summary>
    <a href="/authors/alenaclim.html">Alena Clim</a>
    <a href="/authors/stephengardener.html">Stephen Gardener</a>
    <a href="/authors/anderslidal.html">Anders Lidal</a>
    <a href="/authors/leighmurray.html">Leigh Murray</a>
    <a href="/authors/henriksveen.html">Henrik Sveen</a>
    <a href="/authors/pedrolucas.html">Pedro Lucas</a>
    <a href="/authors/jonimok.html">Joni Mok</a>
    <a href="/authors/wenboyi.html">Wenbo Yi</a>
  </details>
  <details>
    <summary><h4>NTNU, Trondheim</h4></summary>
    <a href="/authors/williemandeville.html">Willie Mandeville</a>
    <a href="/authors/lindsaycharles.html">Lindsay Charles</a>
    <a href="/authors/abhishekchoubey.html">Abhishek Choubey</a>
  </details>
</div>

# Introduction blogs

Below are blog posts that present the various authors of this blog, which are the students of the **Music, Communication & Technology (MCT)** master's programme. MCT is an international, joint master's programme between [**NTNU**](https://www.ntnu.edu/studies/mmct) and [**UiO**](https://www.uio.no/english/studies/programmes/mct-master/), the two largest universities in Norway.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.people -%}
      <li>
        {%- if post.image -%}
          <img src="{{ post.image | prepend: site.baseurl }}" alt="{{ post.title }}" title="{{ post.title }}">
        {%- endif -%}
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <span class="post-meta">• {{ post.author }}</span>
        <h3 align="left">
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        {%- if site.show_excerpts -%}
          <p class="post-excerpt">{{ post.excerpt }}</p>
        {%- endif -%}
        <p class="read-more">
          <a href="{{ post.url | relative_url }}">
            Read more
          </a>
        </p>
      </li>
    {%- endfor -%}
  </ul>
{%- endif -%}
