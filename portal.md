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

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
