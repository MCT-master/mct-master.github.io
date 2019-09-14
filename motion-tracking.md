---
layout: page
title: Music-related Motion Tracking
permalink: /motion-tracking/
---

The blog posts of this section relate to the course **MCT4043 Music-related Motion Tracking**. The aim of the course is to provide the basic principles of technologies for capturing different types of human motion, explore computational analysis of motion data and inform about the main methodological challenges of using motion capture technologies in research.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.Motion-Tracking -%}
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

