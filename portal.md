---
layout: page
title: Portal
permalink: /portal/
---

The blog posts of this section relate to the courses [**MCT4021 Physical-Virtual Communication and Music 1**](https://www.uio.no/studier/emner/hf/imv/MCT4021), [**MCT4021 Physical-Virtual Communication and Music 2**](https://www.ntnu.edu/studies/courses/MCT4022), and [**MCT4021 Physical-Virtual Communication and Music 3**](https://www.uio.no/studier/emner/hf/imv/MCT4023) . The aim of this course is to learn to operate and maintain the Portal, the audio-visual communication platform connecting the two campuses in Trondheim and Oslo. The Portal constitutes a laboratory for network based collaboration and communication. The courses also aims knowledge transfer and at exploring explore the Portal, to improve and further develop communication technologies for the Portal for musical communication.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.portal -%}
    <li>
      {%- if post.image -%}
      <img src="{{ post.image | prepend: site.baseurl }}" alt="{{ post.title }}" title="{{ post.title }}">
      {%- endif -%}
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <span class="post-meta">{{ post.date | date: date_format }}</span>
      <span class="post-meta">• {{ post.author }}</span>
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
    {%- endfor -%}
  </ul>
  {%- endif -%}
