const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/api-routes.js')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


// Start the API server
app.listen(PORT, () => {
  console.log(`API Server now listening on PORT ${PORT}!`);
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
