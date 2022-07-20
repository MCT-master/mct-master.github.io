# utils

Folder for adding additional utils that can come to good use on the blog. Please add a phrase or two about the utils you add, so others can access them easily.

## gh-md-toc

`gh-md-toc` is a table of contents generator for Markdown files. Check out [https://github.com/ekalinin/github-markdown-toc](https://github.com/ekalinin/github-markdown-toc) to learn how to to use it.

## fetch.js and search.json

`fetch.js` and `search.json` are files required for the blog search page, they implement the search functionality.

## slideshow.js and slideshow_example.html

These two files that enable an image (or other content) slideshow in the blogposts. With the slideshow, you can scroll horizontally through a series images. This is great for mobile viewing or where you want to show multiple images of a specific thing. The `slideshow.js` is included as a script to the `_layouts/post.html`. There is also a series of CSS classes in `assets/main.scss` associated with the slideshow implimentation.

For a complete example of how to implement the feature in a blogpost, check out the `slideshow_example.html`.

## hamburger-nav.js

Handles the opening and closing of the hamburger menubar on smaller screens. Also triggers the animation of the hamburger icon. It also disables and enables scrolling/tapping when the menubar is visible and closes it when resizing the window larger again. Related to a series of css classes in `assets/main.scss` that have "-hamburger" tag in them. Is included in `_layouts/header.html`.

## nav-dropdown-click-handler.js

Handles the opening and closing of the dropdown menus on click in both navbars (normal and hamburger-style). Is included in `_layouts/header.html`. The btn-dropdown <a></a> elements in the `header.html` all have an onclick function that is handled in this JS file.

Also, this script sets unique id to the dropdown menus on load. with this script, is no longer possible to click on Topics and Project and access the pages alltopics.md and projects.md. To access these pages we have added an entry (last one) in the dropdown menu.

## pre-commit

`pre-commit` is a git hook (script) that prevent commit of files violating the following MCT blog policies: whitespaces in filename, and is file size exceeding 300BB. The script has to be manually copied (and not moved) to the local hidden folder .git/hooks and ensure that is executable (command 'chmod +x pre-commit') after cloning the repository.

## du.exe

Binary executable file for Windows necessary to run the pre-commit script (the command du measure the file size, natively available on OSX and Linux).
