---
layout: page
title: Machine Learning
permalink: /machine-learning/
---

The blog posts of this section relate to the course [MCT4052 Music and Machine Learning](https://www.uio.no/studier/emner/hf/imv/MCT4052/) (2022 onwards) and to the discontinued course [MCT4047 Music and Machine Learning](https://www.uio.no/studier/emner/hf/imv/MCT4047) (2019 to 2021). The aim of these courses is to develop knowledge of and practical experience with machine learning algorithms applied to music analysis, music information retrieval, interactive music systems, and algorithmic music.

{%- if site.posts.size > 0 -%}

  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.machine-learning -%}

    {%- include list-body.html -%}

    {%- endfor -%}

  </ul>
  {%- endif -%}
