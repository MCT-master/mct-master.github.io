---
layout: page
title: All Topics
permalink: /alltopics/
---

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.posts -%}
      {%- if post.categories contains 'interactive-music'
          or post.categories contains 'machine-learning'
          or post.categories contains 'other'
          or post.categories contains 'motion-capture'
          or post.categories contains 'portal'
          or post.categories contains 'sonification'
          or post.categories contains 'sound-programming'
          or post.categories contains 'spatial-audio' -%}

        {%- include list-body.html -%}
      {%- endif -%}  
    {%- endfor -%}
  </ul>
{%- else -%}
  <p>No posts yet.</p>
{%- endif -%}
