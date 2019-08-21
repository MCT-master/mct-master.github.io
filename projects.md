---
layout: page
title: Applied MCT Project
permalink: /projects/
---

The blog posts of this section relate to the course **MCT4031	Applied MCT Project 1**. The aim of the course is to carry out a music technological project in a real-world setting. The problem at hand may be of a non-musical nature, and will require the students to apply their music technological knowledge in new and creative ways.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.Projects -%}
    <li>
      {%- if post.image -%}
      <img src="{{ post.image | prepend: site.baseurl }}" alt="{{ post.title }}" title="{{ post.title }}">
      {%- endif -%}
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <span class="post-meta">{{ post.date | date: date_format }}</span>
      <span class="post-meta">• {{ post.author }}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      {%- if site.show_excerpts -%}
        {{ post.excerpt }}
      {%- endif -%}
      <h4>
      <strong><a href="{{ post.url | relative_url }}">
        »Read more
      </a></strong>
      </h4>
    </li>
    {%- endfor -%}
  </ul>
  {%- endif -%}


