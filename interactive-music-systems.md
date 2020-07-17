---
layout: page
title: Interactive Music Systems
permalink: /interactive-music-systems/
---

The blog posts of this section relate to the course [**MCT4045 Interactive Music Systems**](https://www.uio.no/studier/emner/hf/imv/MCT4045). The aim of the course is to develop knowledge of and practical experience with the creation of systems intended for realtime sound and music interaction. This could be in the form of a performance oriented instrument, or in various types of interactive sonic systems that explore collaborative, virtual and online music-making.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.interactive-music-systems -%}

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
