Ember.js Boilerplate
====================

A boilerplate HTML, JavaScript & Stylus template and workflow for Ember.js web apps and sites. `emberjs-boilerplate` is intended to be used as a "forked" starting point for your project, or used as a [Brunch skeleton](http://brunch.io/skeletons.html).

* [Brunch][brunch] automates repetitive tasks like minification, concatenation, compiling, linting, and template compilation.
* [npm][npm] manages modules and server-side dependencies.
* [Bower][bower] manages client-side dependencies such as [jQuery][jquery], [Ember][ember], and [Handlebars][hbs].


Getting Started
---------------

1.  **Clone this repo** or [download the source](https://github.com/jas/emberjs-boilerplate/releases) for the latest release.

        git clone https://github.com/jas/emberjs-boilerplate.git

2.  **Install [Node.js and npm](http://nodejs.org)**, which are necessary to install and run Brunch, the task runner, and the Express server used to preview your project in a browser.

3.  **Install Brunch and Bower** globally via npm.

        npm install -g brunch bower

4.  **Install project dependencies.**

        npm install && bower install

5.  **Develop your project.**


Preview Server with Auto-Reload
-------------------------------

### `brunch watch --server`

Brunch watches your project and incrementally rebuilds when source files are changed. A server is also started on port 3333 which auto-reloads when assets are rebuilt.

    http://localhost:3333

The project will be built for a development environment by default. To build and preview for a production environment, include the `production` flag: `brunch watch --server --production`.

There are a few differences between the development and production builds which are meant to make your life easier while developing and debugging your project.

In development:
* JavaScript and CSS are not minified or [mangled](http://lisperator.net/uglifyjs/mangle).
* Scripts and CSS are concatenated with [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps).

Production
----------

### `brunch build --production`

Brunch builds your project, but does not watch for changes or start a preview server.

A build with development settings can be created by omitting the `--production` flag.



[brunch]: http://brunch.io        "Brunch"
[node]:   http://nodejs.org       "Node.js"
[npm]:    https://npmjs.org       "Node Packaged Modules"
[bower]:  http://bower.io         "Bower"
[ember]:  http://emberjs.com      "Ember.js"
[hbs]:    http://handlebarsjs.com "Handlebars.js"
[jquery]: http://jquery.com       "jQuery"
