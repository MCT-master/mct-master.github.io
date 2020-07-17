---
layout: page
title: Projects
permalink: /projects/
---

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.posts -%}
    {%- if post.categories contains 'applied-project'
    or post.categories contains 'masters-thesis' -%}

    {%- include list-body.html -%}

    {%- endif -%}    
    {%- endfor -%}
  </ul>
  {%- else -%}
  <p>No posts yet.</p>
  {%- endif -%}
