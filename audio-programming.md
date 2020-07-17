---
layout: page
title: Audio Programming
permalink: /audio-programming/
---

The blog posts of this section relate to the course [**MCT4048 Audio Programming**](https://www.ntnu.edu/studies/courses/MCT4048). The aim of the course is to provide a solid foundation in digital signal processing and audio-based application development. Integration of relevant technologies and platforms will play an important part, as well as developing user-ready applications.

<br />

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
