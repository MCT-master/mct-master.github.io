---
layout: page
title: Motion Tracking
permalink: /motion-tracking/
---

The blog posts of this section relate to the course [**MCT4043 Music-related Motion Tracking**](https://www.uio.no/studier/emner/hf/imv/MCT4043). The aim of the course is to provide the basic principles of technologies for capturing different types of human motion, explore computational analysis of motion data and inform about the main methodological challenges of using motion capture technologies in musical application and in research.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.motion-tracking -%}

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
