var express = require("express"),
    path    = require("path"),
    app     = express();

module.exports.startServer = function start(port, srcDir, log) {
  port = port || process.env.PORT || 3000;
  srcDir = srcDir || "public";

  app.configure(function() {
    app.use(express.methodOverride());
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(express.static(srcDir));
    app.use(express.errorHandler());
    app.use(app.router);
  });

  app.get("*", function(req, res, next) {
    res.sendfile(path.join(srcDir, "index.html"));
  });

  app.listen(port, function() {
    if (typeof log === "function") {
      log();
    } else {
      console.log("Server listening on port " + port);
    }
  });
};
