import Koa from 'koa'
import _ from 'koa-route'
import ScoutsController from '../api/controllers/scouts'
import Users from '../api/controllers/users'
import Collections from '../api/controllers/collections'
import Cred from '../conf.json'

const app = new Koa();

app.use(_.get('/users/:id', Users.get));
app.use(_.get('/users/:id/scouts', ScoutsController.get));
app.use(_.get('/users/:user_id/scouts/:id', ScoutsController.add))
app.use(_.get('/users/:user_id/collections/:page', Collections.get))

var server = app.listen(Cred.server.port);

module.exports = server;