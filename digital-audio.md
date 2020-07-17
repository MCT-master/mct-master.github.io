---
layout: page
title: Digital Audio
permalink: /digital-audio/
---

The blog posts of this section relate to the module **Digital Audio** in the course [**MCT4000 Introduction to Music, Communication and Technology**](https://www.ntnu.edu/studies/courses/MCT4000). The aim of the module is to explore basic signal processing techniques, physical models and waveguides, implement these techniques for practical experimentation in own projects, and combine as well as creatively utilize these tools for new applications.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.digital-audio -%}

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
