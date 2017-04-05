import Koa from 'koa'
import _ from 'koa-route'
import router from '../api/routes/index'
import Cred from '../conf.json'

const app = new Koa();

app.use(router());

var server = app.listen(Cred.server.port);

module.exports = server;