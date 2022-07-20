---
layout: page
title: Other
permalink: /other/
---


The blog posts of this section are not related to any specific course or relate to discontinued courses such as [MCT4015 Entrepreneurship for MCT](https://web.archive.org/web/20210420053930/https://www.ntnu.edu/studies/courses/MCT4015). 


{%- if site.posts.size > 0 -%}

  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.other -%}

    {%- include list-body.html -%}

    {%- endfor -%}

  </ul>
  {%- endif -%}
