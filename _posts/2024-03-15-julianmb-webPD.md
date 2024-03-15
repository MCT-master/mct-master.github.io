---
layout: post
title: "Formatting WebPD Projects: An Introduction to WebPD, HTML and CSS Styling"
date: 2024-03-15
categories: networked-music
author: Juliana Bigelow
image: https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2024_03_15_julianmb_formattingwebpd.png?vrtx=admin
keywords: networked-music-performance, webpd, html, css, web-application-styling, music-technology
excerpt: "Styling your WebPD application can lead to greater user experince and accessibility."
---

<img src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/image/2024_03_15_julianmb_formattingwebpd.png?vrtx=admin" width="80%" style="display: block; margin: auto;"/>

## Introduction to WebPD
Developed by Miller Puckette in the 1990s, Pure Data is an open source visual audio programming language that can be used to create interactive computer music and other visual and audio media. While Pure Data is open-source and can be integrated with OSC apps, which can make patches more accessible to use to a larger general audience, the patches (the name for Pure Data projects) can be hard to use and distribute beyond the audio community. However, there is now a way to host Pure Data patches entirely online without users needing to ever open or install the Pure Data software: WebPD. 

WebPD is a compiler that takes Pure Data patches and converts audio graph and processing objects from a patch and converts them into JavaScript or AssemblyScript 3. This can then be integrated into any web application, without needing to access the compiler or Pure Data again. 

This blog post will not serve as a how-to guide on using WebPD but rather a short guide on how to use HTML and CSS to customize the styling of elements you are likely to use in a WebPD application. 

If you’d like to learn about WebPD you can access the [WebPD Github](https://github.com/sebpiq/WebPd). When using WebPD there are considerations you will want to take when building your Pure Data patch, such as only using objects compatible with WedPD. A full list of compatible objects is available on the [WebPD Roadmap]().

## HTML and CSS
HTML stands for **HyperText Markup Language**. It is used to define the content and structure of web content. Using HTML you can create headings, paragraphs, range sliders, toggles and [a wide variety of other objects](https://www.w3schools.com/tags/ref_byfunc.asp). 

CSS stands for **Cascading Style Sheets** and it is used to style elements of web content. It can be written into the HTML portion of an application, but objects can be grouped together in an HTML sheet and then one CSS style sheet can be used to control the styling of all elements in the same group.

If you don’t already have a good grasp on how CSS and HTML work together you can access the resources below before continuing with this blog tutorial:

* [What is HTML, CSS and JavaScript? YouTube Video](https://www.youtube.com/watch?v=DHGhFJZLKMs)
* [Khan Academy HTML/CSS Unit](https://www.khanacademy.org/computing/computer-programming/html-css)
* [HTML and CSS Tutorial for Beginners Youtube Playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwiLG5IsOAxDkacPGPVYZlOT)

## Basic Styling for Your WebPD Application
### Headings
#### HTML
You can create headings on your page by tagging them in the body section of the HTML document of your application:

```
<h1>Heading One</h1>
<h2>Heading Two</h2>
<h3>Heading Three</h3>
<h4>Heading Four</h4>
<h5>Heading Five</h5>
<h6>Heading Six</h6>
```

Headings follow a hierarchy and are [a key factor in web accessibility](https://technicallyfunctional.org/2021/04/13/digital-accessibility-unpacked-crafting-blogs-and-newsletters/). There should be only one “heading one” on a webpage, the title. The main headings in the content would all be classified as “heading twos.” For example, all the main headings in this blog post (Introduction to WebPD, HTML and CSS, etc.) fall under the category of heading two. Other heading and subheadings would follow suit. HTML offers up to six levels of headings.
#### CSS
A browser will automatically apply a styling to your headings, but you are able to control this using several parameters. First, you must use the [class attribute](https://www.w3schools.com/html/html_classes.asp) (div class) to classify your headers.

```
<div class="header">
	<h1>Title of Your Web Application</h1>
	<p> Here is the main content about your WebPD patch.</p>
	<h2>Element of Patch</h2>
	<p> Any writing needed to describe the element/>
</div>
```

Then, in the style portion of your main HTML document, or your style sheet referenced to in your HTML document, you can adjust the size, color, padding, and font of the headings.	

```
.header {
    width: 100%;
    height: 200px;
    text-align: right;
    }
    h1 {
        padding-top: 50px;
        font-size: 25px;
        font-family: arial;
        Color: black;
        }
    h2 {
        padding-top: 50px;
        font-size: 20px;
        font-family: arial;
        color: black;
        }
```

### Background Color
The background color of the entire webpage is another element you are able to style and can add a nice touch to your WebPD applications. This way you can customize the color of your application to the website or larger application it will be displayed to users on.
#### CSS
To do this you can reference body where you are keeping your CSS style code and reference the background color.

```
body {
background: linear-gradient (to left, rgba (128, 173, 246, 0.58), rgba (150, 137, 237, 0.587));
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
}
```

In this example there is a gradient and also a font family has been set for the entire body of the document. 

### Sliders
#### HTML
To add a slider in HTML you will use insert to make a [range element](https://blog.hubspot.com/website/html-slider). An example of this is  shown below. Note the class attribute assigning the slider to a class. You will also see parameters available to set the minimum and maximum for the element, as well as give it an ID, which is used when making the element interactive using JavaScript.

```
<div class ="slider">
<input type="range" min="0" value="0" max="600" id="freqControl" />
</div>
```

#### CSS
In your style section or sheet here are examples of what you can customize using CSS:

``` 
.slider {
   width: 100%;
   height: 5px;
   padding: 15px;
   background: #f2f2ed;
   border-radius: 70px;
   display: flex;
   align-items: center;
   box-shadow: 0px 15px 40px #7E6D5766;
``` 

## Conclusion and Resources
Utilizing HTML and CSS to build accessible and visually appealing elements can take your WebPD applications to the next level. With the basis of these tools you can begin to style your interactive audio applications to match the styling of your portfolio website, a client's website and more.

If you are interested in learning more about HTML and CSS check out [W3Schools.com](http://W3Schools.com), which offers tutorials in HTML and CSS, blocks of code examples, and an interactive platform so you can see how the changes you make to code blocks in real time affect the user’s experience with elements. 