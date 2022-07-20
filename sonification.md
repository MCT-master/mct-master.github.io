---
layout: page
title: Sonification
permalink: /sonification/
---


The blog posts of this section relate to the *Sonification* module in the course [MCT4001 Introduction to Music, Communication and Technology](https://www.uio.no/studier/emner/hf/imv/MCT4001/) (from 2022) and to the discontinued course [MCT4046 Sonification and Sound Design](https://web.archive.org/web/20210518095718/https://www.ntnu.edu/studies/courses/MCT4046) (2019 to 2021). The aim of the course is to develop knowledge of and practical experience with sonification, including sound design, interface implementation and perceptual analysis. The interface design process extends from requirements in the problem domain to evaluation of the auditory display.

{%- if site.posts.size > 0 -%}

  <!-- <h2 class="post-list-heading">{{ page.list_title | default: "Posts" }}</h2> -->
  <ul class="post-list">
    {%- for post in site.categories.sonification -%}

    {%- include list-body.html -%}

    {%- endfor -%}

  </ul>
{%- endif -%}

  <!-- Hack from https://github.com/jekyll/jekyll/issues/2538 -->

{% capture difference %} {{ site.posts | size | minus:1 }} {% endcapture %}

  <!-- {% unless difference contains '-' %} -->
  <!-- ***No posts... yet.*** -->
   <!-- Your code will now be dependent on page.tags being empty -->
  <!-- {% endunless %} -->
