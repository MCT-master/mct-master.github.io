---
layout: page
title: Audio Programming
permalink: /audio-programming/
---

The blog posts of this section relate to the course [MCT4001 Introduction to Music, Communication and Technology](https://www.uio.no/studier/emner/hf/imv/MCT4001/) (from 2021), and to the discontinued course [MCT4048 Audio Programming](https://web.archive.org/web/20210414104443/https://www.ntnu.edu/studies/courses/MCT4048) (2019 to 2021). This section also includes posts from the _Digital Audio_ and _Scientific Computing_ modules of the discontinued course [MCT4000 Introduction to Music, Communication and Technology](https://web.archive.org/web/20210419143616/https://www.ntnu.edu/studies/courses/MCT4000) (from 2018 to 2020). The aim of these course is to develop audio signal processing and sound design knowledge as well as skills with general-purpose and audio-specific programming.

{%- if site.posts.size > 0 -%}

  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.audio-programming -%}

    {%- include list-body.html -%}

    {%- endfor -%}

  </ul>
{%- endif -%}

<!-- Hack from https://github.com/jekyll/jekyll/issues/2538 -->

{% capture difference %} {{ site.posts | size | minus:1 }} {% endcapture %}

<!-- {% unless difference contains '-' %} -->
<!-- ***No posts... yet.*** -->
 <!-- Your code will now be dependent on page.tags being empty -->
<!-- {% endunless %} -->
