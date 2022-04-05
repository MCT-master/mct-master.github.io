---
layout: page
title: Portal
permalink: /portal/
---

The blog posts of this section relate to the courses [MCT4024 Physical-Virtual Communication and Music 1](https://www.uio.no/studier/emner/hf/imv/MCT4024), [MCT4025 Physical-Virtual Communication and Music 2](https://www.uio.no/studier/emner/hf/imv/MCT4025/), and [MCT4021 Physical-Virtual Communication and Music 3](https://www.uio.no/studier/emner/hf/imv/MCT4023). This course aims to educate students on operating and maintaining the physical-virtual Portal, a laboratory for network-based musical communication. The students will gain knowledge and practical experience with a variety of tools for online musical collaboration, be familiar with the technical design of advanced audiovisual communication platforms and know about the theoretical and practical limitations of different audiovisual networking systems.

{%- if site.posts.size > 0 -%}

  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.portal -%}

    {%- include list-body.html -%}

    {%- endfor -%}

  </ul>
  {%- endif -%}
