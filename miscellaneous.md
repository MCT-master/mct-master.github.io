---
layout: page
title: Miscellaneous
permalink: /miscellaneous/
---

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.miscellaneous -%}

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
