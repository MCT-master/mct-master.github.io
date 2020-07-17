---
layout: page
title: Spatial Audio
permalink: /spatial-audio/
---

The blog posts of this section relate to the course [**MCT4044 Spatial Audio**](https://www.ntnu.edu/studies/courses/MCT4044). The aim of the course is to develop knowledge of and practical experience with spatial audio production technologies, including binaural and multichannel rendering of both channel-based and object-based audio. Topics include virtual acoustics, auralization and spatial audio perception.


{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.spatial-audio -%}

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
