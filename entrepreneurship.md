---
layout: page
title: Entrepreneurship
permalink: /entrepreneurship/
---

The blog posts of this section relate to the course [**MCT4015 Entrepreneurship for MCT**](https://www.ntnu.edu/studies/courses/MCT4015). The aim of the course is to develop theoretical and practical knowledge of the foundations of entrepreneurship and how they can be applied in practice. Through a combination of readings, exercises, and practical, action-based learning, students will practice identifying problems, developing solutions, and learning how to bring their ideas (both business and non-business) into reality.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.entrepreneurship -%}
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
