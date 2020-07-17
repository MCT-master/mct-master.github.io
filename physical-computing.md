---
layout: page
title: Physical Computing
permalink: /physical-computing/
---

The blog posts of this section relate to the module **Physical Computing** in the course in the course [**MCT4000 Introduction to Music, Communication and Technology**](https://www.ntnu.edu/studies/courses/MCT4000). The aim of the module is to explore physical computing applied to real-time interactive systems for music performance by means of creating prototypes with accessible technologies.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.physical-computing -%}

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
