import Koa from 'koa'
import _ from 'koa-route'
import mysql from 'mysql2/promise'

import Users from '../api/routes/users'
import Params from '../api/routes/params'

import Cred from '../conf.json'

const app = new Koa();

app.use(async function mysqlConnection(ctx, next) {
  ctx.state.db = await mysql.createConnection({
    host: Cred.host,
    user: Cred.user,
    password: Cred.pass,
    database: Cred.database
  });

  await next();
})

app.use(_.put('/users', Users.add));

app.use(_.get('/users/:id', Users.get));

app.use(_.delete('/users/:id', Users.remove));

app.use(_.post('/users/:id', Users.update));

app.use(_.get('/params/', Params.getAll));

app.use(_.get('/params/:id', Params.get));

var server = app.listen(Cred.server.port);

module.exports = server;