var package = require('./package');

// Determine whether to build for a development or production environment.
var isProduction = process.argv.indexOf('--production') > 0,
    buildTarget  = isProduction ? 'production' : 'development';


// Vendor Libraries
// ----------------
//
// It's highly recommended to manage these with Bower (http://bower.io).
// Brower offers serveral ways to install packages, even ones that are
// not in its registry. See "Bower: Installing packages and dependencies":
// https://github.com/bower/bower#installing-packages-and-dependencies
//
// These files will be concatenated in the order listed below. You must
// specify a development and production version even if the library doesn't
// differentiate between the two. Some libraries, such as Ember and
// Handlebars, include helpful debugging info in their non-minified builds.

var vendorFiles = {
  javascripts: {
    development: [
      'app/config/environment.js',
      'app/config/environment.dev.js',
      'bower_components/module-loader/index.js',
      'bower_components/jquery/jquery.js',
      'bower_components/handlebars/handlebars.js',
      'bower_components/ember/ember.js',
      // 'bower_components/ember-data/ember-data.js',
      'bower_components/ember-resolver/dist/ember-resolver.js'
    ],
    production: [
      'app/config/environment.js',
      'app/config/environment.prod.js',
      'bower_components/module-loader/index.js',
      'bower_components/jquery/jquery.js',
      'bower_components/handlebars/handlebars.js',
      'bower_components/ember/ember.prod.js',
      // 'bower_components/ember-data/ember-data.prod.js',
      'bower_components/ember-resolver/dist/ember-resolver.prod.js'
    ]
  },
  stylesheets: {
    development: [
      // Add stylesheets to use in development
    ],
    production: [
      // Add stylesheets to use in production
    ]
  }
};


// Brunch Configuration
// --------------------
//
// Documentation: https://github.com/brunch/brunch/blob/master/docs/config.md
var brunchConfig = {
  server: {
    path: 'server/app.js',
    port: 3333
  },

  files: {
    // Handlebars Templates
    //
    // * Precompile templates for Ember
    // * Concatenates into `js/templates.js`
    //
    // https://github.com/bartsqueezy/ember-handlebars-brunch
    templates: {
      precompile: true,
      root: 'templates',
      joinTo: 'js/templates.js'
    },

    // JavaScript
    //
    // * Lint with JSHint
    // * Concatenate and generate source maps
    // * Minify with UglifyJS (production only)
    //
    // https://github.com/brunch/javascript-brunch
    javascripts: {
      joinTo: {
        'js/app.js': /^app(?!\/(config))/,
        'js/vendor.js': resolveVendorFiles('javascripts')
      },
      order: {
        before: getVendorFiles('javascripts')
      }
    },

    // Stylesheets
    //
    // * Compile Stylus to CSS
    // * Concatenate and generate source maps
    // * TODO: Minify in production
    //
    // https://github.com/brunch/stylus-brunch
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/,
        'css/vendor.css': resolveVendorFiles('stylesheets')
      },
      order: {
        before: getVendorFiles('stylesheets')
      }
    }
  },

  // AMD Modules
  //
  // https://github.com/amdjs/amdjs-api/wiki/AMD
  modules: {
    wrapper: 'amd',
    definition: 'amd',
    nameCleaner: function(path) {
      // Use the `modulePrefix` defined in `package.json`
      var prefix = package.modulePrefix || 'app';
      // Brunch uses an "app" prefix by default. Let's replace it.
      return path.replace(/^app\//, prefix + '/');
    }
  },

  // ES6 Module Transpiler
  //
  // ECMAScript 6 includes a draft specification for a module syntax.
  // The ES6 Module Transpiler converts all of our application scripts
  // using this syntax into AMD.
  //
  // http://square.github.io/es6-module-transpiler/
  es6ModuleTranspiler: {
    match: /^app(?!\/(config))/,
    type: 'amd'
  },

  // Plugin Config
  plugins: {
    jshint: {
      pattern: /^app\/.*\.js$/,
      warnOnly: true
    }
  }
};
// End Config


// Helper Functions
// ----------------

// Get vendor files of a given `type` for the current build target.
// `type` can be "javascripts" or "stylesheets".
function getVendorFiles(type) {
  var files = vendorFiles[type];
  if (files && typeof files === 'object') {
    return files[buildTarget];
  }
}

// Return a function for use in `joinTo` that determines whether a
// vendor script or stylesheet should be included in the build process.
function resolveVendorFiles(type) {
  var files = getVendorFiles(type) || [];
  return function(path) {
    return files.indexOf(path) > -1;
  }
}

// Export Config
exports.config = brunchConfig;
