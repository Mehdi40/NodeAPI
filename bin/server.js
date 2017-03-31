import Koa from 'koa';
import _ from 'koa-route';

import Users from '../api/routes/users'
import Params from '../api/routes/params'

import mysql from 'mysql2/promise'

const PORT = 3003;
const app = new Koa();

app.use(async function mysqlConnection(ctx, next) {
  ctx.state.db = await mysql.createConnection({
    host: 'sql-dev02',
    user: 'www-dev',
    password: '',
    database: 'test'
  });

  await next();
})

app.use(_.get('/users/', Users.getAll));

app.use(_.put('/users', Users.add));

app.use(_.get('/users/:id', Users.get));

app.use(_.delete('/users/:id', Users.remove));

app.use(_.post('/users/:id', Users.update));

app.use(_.get('/params/', Params.getAll));

var server = app.listen(PORT);

module.exports = server;