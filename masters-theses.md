---
layout: page
title: Master's Theses
permalink: //masters-theses/
---

The blog posts of this section relate to the course [**MCT4090 Master's Thesis in Music, Communication and Technology**](https://www.uio.no/studier/emner/hf/imv/MCT4090). The Master's thesis is a research-based academic report based on individual research in the area of music, communication and technology. The topicS represent a challenge within the topical areas of the MCT programme. Theses adheres to research ethical practices, and the project relates and contributes to the existing research literature. The project can include practical elements, but the thesis must also include a literature review, theoretical discussion, methodological reflection and aesthetic evaluation.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.masters-thesis -%}
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
