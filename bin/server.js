import Koa from 'koa'
import _ from 'koa-route'
import Scouts from '../api/routes/scouts'
import Users from '../api/routes/users'
import Cred from '../conf.json'

const app = new Koa();

app.use(_.get('/users/:id', Users.get));
app.use(_.get('/scouts/:id', Scouts.get));
app.use(_.get('/users/:user_id/scouts/:id', Scouts.add))

var server = app.listen(Cred.server.port);

module.exports = server;