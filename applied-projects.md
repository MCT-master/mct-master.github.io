---
layout: page
title: Applied Projects
permalink: /applied-projects/
---

The blog posts of this section relate to the course [MCT4033 Applied MCT Project](https://www.uio.no/studier/emner/hf/imv/MCT4033) (2022 onwards) and to the discontinued courses [MCT4031 Applied MCT Project 1](https://www.uio.no/studier/emner/hf/imv/MCT4031) and [MCT4032 Applied MCT Project 2](https://web.archive.org/web/20210419164338/https://www.ntnu.edu/studies/courses/MCT4032) (2019 to 2021). The aim of these courses is to carry out a music technological project in a real-world setting with an external partner or stakeholder. The project should have a societal, research or industrial impact. The problem at hand could be of a non-musical nature requiring students to apply their music-technological knowledge in new and creative ways.

{%- if site.posts.size > 0 -%}

  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.applied-project -%}

    {%- include list-body.html -%}

    {%- endfor -%}

  </ul>
  {%- endif -%}
