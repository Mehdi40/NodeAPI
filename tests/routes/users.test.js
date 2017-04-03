var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../bin/server.test');

chai.use(chaiHttp);

// Test sur un élément spécifique
describe('GET /users/4895', function() {
  it('should return a user', function(done) {
    chai.request(server)
    .get('/users/4895')
    .end(function(err, res) {
      // On teste si le code est bien 200
      res.should.have.status(200);

      // On teste si la réponse est bien du JSON
      res.should.be.json; // jshint ignore:line

      // On teste si la réponse est bien un array
      res.body.should.be.a('array');

      // On teste si la réponse n'a bien qu'un élément (l'User)
      res.body.length.should.equal(1);

      // On teste si l'User possède un ID
      res.body[0].should.have.property('id');
      res.body[0].id.should.be.a('number');
      res.body[0].id.should.equal(1);

      // On teste si l'User possède un email
      res.body[0].should.have.property('email');
      res.body[0].email.should.be.a('string');
      res.body[0].email.should.equal('pseudo@fai.fr');

      // On teste si l'User possède un username
      res.body[0].should.have.property('username');
      res.body[0].username.should.be.a('string');
      res.body[0].username.should.equal('Pseudo');

      // On teste si l'User possède une date de création
      res.body[0].should.have.property('date_creation');
      res.body[0].date_creation.should.be.equal('2010-09-19 11:56:26.000');

      // On teste si l'User possède un mot de passe
      res.body[0].should.have.property('pass');
      res.body[0].pass.should.be.a('string');
      res.body[0].pass.should.be.equal('password');
      
      done();
    });
  });
});