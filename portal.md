---
layout: page
title: Portal
permalink: /portal/
---

The blog posts of this section relate to the courses [MCT4024 Physical-Virtual Communication and Music 1](https://www.uio.no/studier/emner/hf/imv/MCT4024) and [MCT4025 Physical-Virtual Communication and Music 2](https://www.uio.no/studier/emner/hf/imv/MCT4025/) (from 2021), and to the discontinued courses [MCT4021 Physical-Virtual Communication and Music 1](https://www.uio.no/studier/emner/hf/imv/MCT4021/), [MCT4022 Physical-Virtual Communication and Music 2](https://www.uio.no/studier/emner/hf/imv/MCT4022/), and [MCT4023 Physical-Virtual Communication and Music 3](https://www.uio.no/studier/emner/hf/imv/MCT4023/) (2018 to 2021). These courses aim to provide theoretical and practical knowledge on advanced audio-visual systems for online synchronous musical collaboration and hybrid communication settings. The students also learn to operate, maintain and experiment with the physical-virtual Portal, a laboratory for network-based musical communication.

{%- if site.posts.size > 0 -%}

  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.portal -%}

    {%- include list-body.html -%}

    {%- endfor -%}

  </ul>
  {%- endif -%}
