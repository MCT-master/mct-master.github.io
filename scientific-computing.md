---
layout: page
title: Scientific Computing
permalink: /scientific-computing/
---

The blog posts of this section relate to the module **Scientific Computing** in the course in the course [**MCT4000 Introduction to Music, Communication and Technology**](https://www.ntnu.edu/studies/courses/MCT4000). The aim of the module is to learn to a high-level object-oriented programming language solve complex problems and to analyze or visualize data.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.scientific-computing -%}

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
