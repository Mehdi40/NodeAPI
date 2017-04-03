import faker from 'faker';

before(function(done){
  console.log("Flush de la base + Remplissage avec fausses données");
  // Flush la base
  ctx.state.db.query('DROP TABLE users');
  ctx.state.db.query('CREATE TABLE users(id INT PRIMARY KEY NOT NULL, username VARCHAR(255), email VARCHAR(255))');
  ctx.state.db.query(`INSERT INTO sc_user (username, email) VALUES (${faker.name.findName()}, ${faker.internet.email()})`);
  // La remplir avec de fausses données
  done();
})

import Users from './routes/users.test'
import Params from './routes/params.test'