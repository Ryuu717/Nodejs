// const path = require('path');

// const express = require('express');
// const app = express();

// const userRoutes = require("./routes/user.routes");
// const productRoutes = require('./routes/product.routes');
// const cartRoutes = require('./routes/cart.routes');
// const orderRoutes = require('./routes/order.routes');
// const baseRoutes = require('./routes/base.routes');



// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use(userRoutes);
// app.use(productRoutes);
// app.use(cartRoutes);
// app.use(orderRoutes);
// app.use(baseRoutes);

// app.use(express.static('public'));
// app.use('/products/assets', express.static('product-data'));

// app.use(express.urlencoded({ extended: false }));  //need check

// const db = require('./data/database');

// const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
// app.use(addCsrfTokenMiddleware);

// const errorHandlerMiddleware = require('./middlewares/error-handler');
// app.use(errorHandlerMiddleware);

// const expressSession = require('express-session');
// const createSessionConfig = require('./config/session');
// const sessionConfig = createSessionConfig();

// app.use(expressSession(sessionConfig));

// const checkAuthStatusMiddleware = require('./middlewares/check-auth');
// app.use(checkAuthStatusMiddleware);


// const csrf = require('csurf');
// app.use(csrf());


// db.connectToDatabase()
//   .then(function () {
//     app.listen(3000);
//   })
//   .catch(function (error) {
//     console.log('Failed to connect to the database!');
//     console.log(error);
// });



//--------------------------------
const path = require('path');

const express = require('express');
const csrf = require('csurf');
const expressSession = require('express-session');

const createSessionConfig = require('./config/session');
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const checkAuthStatusMiddleware = require('./middlewares/check-auth');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const baseRoutes = require('./routes/base.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use('/products/assets', express.static('product-data'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf());


app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);

app.use(baseRoutes);
app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);
app.use(orderRoutes);


app.use(errorHandlerMiddleware);

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
// const csrf = require('csurf');
// const expressSession = require('express-session');

// const createSessionConfig = require('./config/session');
// const db = require('./data/database');
// const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
// const errorHandlerMiddleware = require('./middlewares/error-handler');
// const checkAuthStatusMiddleware = require('./middlewares/check-auth');
// const protectRoutesMiddleware = require('./middlewares/protect-routes');
// const cartMiddleware = require('./middlewares/cart');
// const updateCartPricesMiddleware = require('./middlewares/update-cart-prices');
// const notFoundMiddleware = require('./middlewares/not-found');
// const authRoutes = require('./routes/auth.routes');
// const productsRoutes = require('./routes/products.routes');
// const baseRoutes = require('./routes/base.routes');
// const adminRoutes = require('./routes/admin.routes');
// const cartRoutes = require('./routes/cart.routes');
// const ordersRoutes = require('./routes/orders.routes');

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use(express.static('public'));
// app.use('/products/assets', express.static('product-data'));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// const sessionConfig = createSessionConfig();

// app.use(expressSession(sessionConfig));
// app.use(csrf());

// app.use(cartMiddleware);
// app.use(updateCartPricesMiddleware);

// app.use(addCsrfTokenMiddleware);
// app.use(checkAuthStatusMiddleware);

// app.use(baseRoutes);
// app.use(authRoutes);
// app.use(productsRoutes);
// app.use('/cart', cartRoutes);
// app.use('/orders', protectRoutesMiddleware, ordersRoutes);
// app.use('/admin', protectRoutesMiddleware, adminRoutes);

// app.use(notFoundMiddleware);

// app.use(errorHandlerMiddleware);

// db.connectToDatabase()
//   .then(function () {
//     app.listen(3000);
//   })
//   .catch(function (error) {
//     console.log('Failed to connect to the database!');
//     console.log(error);
//   });