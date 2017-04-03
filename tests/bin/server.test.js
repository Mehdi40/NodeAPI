import Koa from 'koa'
import _ from 'koa-route'
import mysql from 'mysql2/promise'

import Users from '../../api/routes/users'
import Params from '../../api/routes/params'

import DbCred from '../conf.test.json'

const PORT = 3000;
const app = new Koa();

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: DbCred.host,
    user: DbCred.user,
    password: DbCred.pass,
    database: DbCred.database
  }
});

import bookshelf from 'bookshelf'

app.use(_.get('/users/', Users.getAll));

var server = app.listen(PORT);

module.exports = server;