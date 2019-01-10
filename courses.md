---
layout: page
title: Courses
permalink: /courses/
---

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.posts -%}
    {%- if post.categories contains 'Portal'
    or post.categories contains 'Physical-Computing'
    or post.categories contains 'DSP'
    or post.categories contains 'HCI'
    or post.categories contains 'Motion-Tracking'
    or post.categories contains 'Sonification'
    or post.categories contains 'Audio-Programming'
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
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      {%- if site.show_excerpts -%}
        {{ post.excerpt }}
      {%- endif -%}
      <h4>
      <strong><a href="{{ post.url | relative_url }}">
        »Read more
      </a></strong>
      </h4>
    </li>
    {%- endif -%}    
    {%- endfor -%}
  </ul>
  {%- else -%}
  <p>No posts yet.</p>
  {%- endif -%}
