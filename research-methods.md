---
layout: page
title: Research Methods
permalink: /research-methods/
---

The blog posts of this section relate to the course [**MCT4010 – Research Methods, Tools and Issues in MCT**](https://www.uio.no/studier/emner/hf/imv/MCT4010/). The aim of the course is to develop knowledge of and skills in various research methods, tools and issues in the field of music, communication and technology. These range from qualitative to quantitative methods, and from artistic to scientific perspectives, and will prepare the student for carrying out research and development in the field.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.research-methods -%}
    <li>
      {%- if post.image -%}
      <img src="{{ post.image | prepend: site.baseurl }}" alt="{{ post.title }}" title="{{ post.title }}">
      {%- endif -%}
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <span class="post-meta">{{ post.date | date: date_format }}</span>
      <span class="post-meta">• {{ post.author }}</span>
      <h3>
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

<!-- Hack from https://github.com/jekyll/jekyll/issues/2538 -->
{% capture difference %} {{ site.posts | size | minus:1 }} {% endcapture %}
<!-- {% unless difference contains '-' %} -->
<!-- ***No posts... yet.*** -->
 <!-- Your code will now be dependent on page.tags being empty -->
<!-- {% endunless %} -->
