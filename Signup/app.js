const path = require('path');

const express = require('express');
// const expressSession = require('express-session');

// const createSessionConfig = require('./config/session');
const db = require('./data/database');
const userRoutes = require('./routes/user.routes');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static( "public" ) );
app.use(express.urlencoded({ extended: false }));  //need this for sending input data from form to db

// app.use(express.json());

// const sessionConfig = createSessionConfig();

// app.use(expressSession(sessionConfig));
app.use(userRoutes);


db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log('Failed to connect to the database!');
    console.log(error);
});



// const path = require('path');

// const express = require('express');
// const expressSession = require('express-session');

// const createSessionConfig = require('./config/session');
// const db = require('./data/database');
// const userRoutes = require('./routes/user.routes');

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use(express.static('public'));
// app.use(express.json());

// const sessionConfig = createSessionConfig();

// app.use(expressSession(sessionConfig));

// app.use(userRoutes);

// db.connectToDatabase()
//   .then(function () {
//     app.listen(3000);
//   })
//   .catch(function (error) {
//     console.log('Failed to connect to the database!');
//     console.log(error);
// });