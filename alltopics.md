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
    or post.categories contains 'spatial-audio'
    -%}

    <li>
      {%- if post.image -%}
      <img src="{{ post.image | prepend: site.baseurl }}" alt="{{ post.title }}" title="{{ post.title }}">
      {%- endif -%}
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <span class="post-meta">{{ post.date | date: date_format }}</span>
      <span class="post-meta">• {{ post.author }}</span>
      <br />
      <span class="post-meta"><strong>{{ post.categories }}</strong></span>
      <h3 align="left">
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      {%- if site.show_excerpts -%}
        {{ post.excerpt }}
      {%- endif -%}
      <h4>
      <a href="{{ post.url | relative_url }}">
        Read more
      </a>
      </h4>
    </li>
    {%- endif -%}    
    {%- endfor -%}
  </ul>
  {%- else -%}
  <p>No posts yet.</p>
  {%- endif -%}
