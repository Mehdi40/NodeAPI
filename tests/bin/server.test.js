import Koa from 'koa'
import _ from 'koa-route'
import mysql from 'mysql2/promise'

import Users from '../../api/routes/users'
import Params from '../../api/routes/params'

import DbCred from '../conf.test.js'

const PORT = 3000;
const app = new Koa();

app.use(async function mysqlConnection(ctx, next) {
  ctx.state.db = await mysql.createConnection({
    host: DbCred.host,
    user: DbCred.user,
    password: DbCred.pass,
    database: DbCred.database
  });

  await next();
})

app.use(_.get('/users/', Users.getAll));

app.use(_.put('/users', Users.add));

app.use(_.get('/users/:id', Users.get));

app.use(_.delete('/users/:id', Users.remove));

app.use(_.post('/users/:id', Users.update));

app.use(_.get('/params/', Params.getAll));

app.use(_.get('/params/:id', Params.get));

var server = app.listen(PORT);

module.exports = server;