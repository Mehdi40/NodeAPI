import Koa from 'koa'
import _ from 'koa-route'
import Scouts from '../api/models/Scouts'
import Cred from '../conf.json'

const app = new Koa();

app.use(_.post('/users/1/scouts/:id', Scouts.add));

var server = app.listen(Cred.server.port);

module.exports = server;