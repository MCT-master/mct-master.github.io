---
layout: page
title: Entrepreneurship
permalink: /entrepreneurship/
---

The blog posts of this section relate to the course [**MCT4015 Entrepreneurship for MCT**](https://www.ntnu.edu/studies/courses/MCT4015). The aim of the course is to develop theoretical and practical knowledge of the foundations of entrepreneurship and how they can be applied in practice. Through a combination of readings, exercises, and practical, action-based learning, students will practice identifying problems, developing solutions, and learning how to bring their ideas (both business and non-business) into reality.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.entrepreneurship -%}

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
