
/**
 * Module dependencies.
 */
require.paths.unshift(__dirname + '/support');
var connect = require('./');

connect(
    connect.bodyParser()
  , function(req, res){
    res.end('test')
  }
).listen(3000);