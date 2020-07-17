---
layout: page
title: Human-Computer Interaction
permalink: /human-computer-interation/
---

The blog posts of this section relate to the module **Human-Computer Interaction** in the course [**MCT4000 Introduction to Music, Communication and Technology**](https://www.ntnu.edu/studies/courses/MCT4000). The aim of the module is to discover the theory and practice in the field of human-computer interaction applied to music technology.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.human-computer-interaction -%}

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
