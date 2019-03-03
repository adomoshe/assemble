const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// app.use(routes);

// Start the API server
app.listen(PORT, () => {
  console.log(`API Server now listening on PORT ${PORT}!`);
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
