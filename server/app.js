var express = require('express'),
    path    = require('path'),
    app     = express();

var port      = process.env.PORT     || 3000,
    env       = process.env.NODE_ENV || 'development',
    srcDir    = env === 'production' ? 'dist' : '.temp',
    publicDir = path.join(srcDir, 'public');;

app.configure(function() {
  app.use(express.methodOverride());
  app.use(express.urlencoded());
  app.use(express.json());
  app.use(express.static(publicDir));
  app.use(express.errorHandler());
  app.use(app.router);
});

app.get('*', function(req, res, next) {
  res.sendfile(path.join(publicDir, 'index.html'));
});

module.exports = app.listen(port, function() {
  console.log('Server listening on ' + port + ' in ' + env);
});
