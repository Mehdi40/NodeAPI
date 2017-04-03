import Cred from '../conf.json'

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: Cred.database.host,
    user: Cred.database.user,
    password: Cred.database.pass,
    database: Cred.database.database
  }
});

export default { knex }