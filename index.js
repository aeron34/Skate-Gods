var live = require('livereload');
var serv = live.createServer();
serv.watch(__dirname);
