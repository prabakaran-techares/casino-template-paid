const configureRoutes = (app) => {
  app.use('/api/auth', require('./api/auth'));
  app.use('/api/users', require('./api/users'));
  app.use('/api/chips', require('./api/chips'));
  app.use('/api/praba', require('./api/praba'));
  app.use('/', (req, res) => {
    res.status(200).send('Welcome to Vintage Poker!');
  });
};

module.exports = configureRoutes;
