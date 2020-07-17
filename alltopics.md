---
layout: page
title: All Topics
permalink: /alltopics/
---

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.posts -%}
    {%- if post.categories contains 'audio-programming'
    or post.categories contains 'digital-audio'
    or post.categories contains 'entrepreneurship'
    or post.categories contains 'human-computer-interaction'
    or post.categories contains 'nteractive-music-systems'
    or post.categories contains 'machine-learning'
    or post.categories contains 'miscellaneous'
    or post.categories contains 'music-cognition'
    or post.categories contains 'motion-tracking'
    or post.categories contains 'physical-computing'
    or post.categories contains 'research-methods'
    or post.categories contains 'scientific-computing'
    or post.categories contains 'sonification'
    or post.categories contains 'spatial-audio' -%}

    {%- include list-body.html -%}

    {%- endif -%}    
    {%- endfor -%}
  </ul>
  {%- else -%}
  <p>No posts yet.</p>
  {%- endif -%}
