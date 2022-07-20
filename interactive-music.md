---
layout: page
title: Interactive Music
permalink: /interactive-music/
---

The blog posts of this section relate to the course [MCT4054 Interactive Music Systems](https://www.uio.no/studier/emner/hf/imv/MCT4054/) (2022 onwards) and to the discontinued course [MCT4045 Interactive Music Systems](https://www.uio.no/studier/emner/hf/imv/MCT4045) (2019 to 2021). The aim of these courses is to develop knowledge of and practical experience with the design and implementation of systems intended for real-time sonic or musical interaction. This could be in the form of a performance-oriented musical instrument, or in various types of interactive sonic systems that explore collaborative physical, or virtual music-making. This section also includes posts from the *Physical Computing* and *Human-Computer Interaction* modules of the discontinued course [MCT4000 Introduction to Music, Communication and Technology](https://web.archive.org/web/20210419143616/https://www.ntnu.edu/studies/courses/MCT4000) (from 2018 to 2020).

{%- if site.posts.size > 0 -%}

  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.interactive-music -%}

    {%- include list-body.html -%}

    {%- endfor -%}

  </ul>
  {%- endif -%}
