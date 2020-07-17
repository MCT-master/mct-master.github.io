---
layout: page
title: Master's Theses
permalink: //masters-theses/
---

The blog posts of this section relate to the course [**MCT4090 Master's Thesis in Music, Communication and Technology**](https://www.uio.no/studier/emner/hf/imv/MCT4090). The Master's thesis is a research-based academic report based on individual research in the area of music, communication and technology. The topics represent a challenge within the topical areas of the MCT programme. Theses adheres to research ethical practices, and the project relates and contributes to the existing research literature. The project can include practical elements, but the thesis must also include a literature review, theoretical discussion, methodological reflection and aesthetic evaluation.

<br />

{%- if site.posts.size > 0 -%}
  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.masters-thesis -%}

    {%- include list-body.html -%}

    {%- endfor -%}
  </ul>
  {%- endif -%}
