require('marko/node-require').install();
require('marko/express');

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const server = express();

server.use('/estatico', express.static('src/app/public'));

server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

const auth = require('./src/config/auth');
auth(server);

server.use('/livros*', (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
});

const routes = require('./src/app/routes');
server.use(routes);

// server.use((req, res, next) => {
//   return res.status(404).marko(
//     require('./src/app/views/errors/404.marko')
//   );
// });

// server.use((error, req, res, next) => {
//   return res.status(500).marko(
//     require('./src/app/views/errors/500.marko')
//   );
// });

server.listen(3000);