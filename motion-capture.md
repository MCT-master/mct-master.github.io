---
layout: page
title: Motion Capture
permalink: /motion-capture/
---

The blog posts of this section relate to the course [MCT4053 Motion Capture](https://www.uio.no/studier/emner/hf/imv/MCT4053/) (from 2022) and to the discontinued course [MCT4043 Music-related Motion Tracking](https://www.uio.no/studier/emner/hf/imv/MCT4043) (2019 to 2021). The aim of these courses is to provide knowledge and skills in recording, visualising, and analysing human body motion. This includes learning about human anatomy and biomechanics and getting hands-on experience with setting up, calibrating, tracking, and recording with different types of motion capture systems.

{%- if site.posts.size > 0 -%}

  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.motion-capture -%}

    {%- include list-body.html -%}

    {%- endfor -%}

  </ul>
  {%- endif -%}
