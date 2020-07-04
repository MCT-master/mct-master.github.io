---
layout: page
title: Applied Projects
permalink: /applied-projects/
---

The blog posts of this section relate to the course [**MCT4031	Applied MCT Project 1**](https://www.uio.no/studier/emner/hf/imv/MCT4031) and [**MCT4032	Applied MCT Project 2**](https://www.ntnu.edu/studies/courses/MCT4032). The aim of the course is to carry out a music technological project in a real-world setting and with external stakeholders The problem at hand may be of a non-musical nature, but have a societal or industrial impact, requiring to apply music technological knowledge in new and creative ways.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.applied-project -%}
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
        {{ post.excerpt }}
      {%- endif -%}
      <h4>
      <a href="{{ post.url | relative_url }}">
        Read more
      </a>
      </h4>
    </li>
    {%- endfor -%}
  </ul>
  {%- endif -%}
