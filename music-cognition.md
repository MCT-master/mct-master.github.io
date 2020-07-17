---
layout: page
title: Music Cognition
permalink: /music-cognition/
---

The blog posts of this section relate to the module **Music Cognition** in the course [**MCT4000 Introduction to Music, Communication and Technology**](https://www.ntnu.edu/studies/courses/MCT4000). The aim of the module is to provide an introduction to Music Cognition, which concerns processes that are especially vital in music performance and music listening.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.music-cognition -%}

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
