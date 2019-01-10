---
layout: page
title: Sonification and Sound Design
permalink: /sonification-sound-design/
---

The blog posts of this section relate to the course **MCT4046 Sonification and Sound Design**. The aim of the course is to develop knowledge of and practical experience with sonification, including sound design, interface implementation and perceptual analysis. The interface design process extends from requirements in the problem domain to evaluation of the auditory display.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.Sonification -%}
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
  {%- else -%}
  <p>No posts yet.</p>
  {%- endif -%}
