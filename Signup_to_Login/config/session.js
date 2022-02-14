const expressSession = require('express-session');
const mongoDbStore = require('connect-mongodb-session');

function createSessionStore() {
  const MongoDBStore = mongoDbStore(expressSession);

  const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017',
    databaseName: 'online-shop',
    collection: 'sessions'
  });

  return store;
}

function createSessionConfig() {
  return {
    secret: 'super-secret',   //クッキーIDを暗号化しクッキーIDが書き換えらているかを判断
    resave: false,            //セッションにアクセスすると上書き
    saveUninitialized: false, //未初期化状態のセッションも保存
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000   //セッションの消滅時間
    }
  };
}

module.exports = createSessionConfig;