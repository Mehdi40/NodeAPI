var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../bin/server');

chai.use(chaiHttp);

// Test sur plusieurs éléments
describe('GET /params', function() {
  it('should return all params', function(done) {
    chai.request(server)
    .get('/params')
    .end(function(err, res) {
      // On teste si le code est bien 200
      res.should.have.status(200);

      // On teste si la réponse est bien du JSON
      res.should.be.json; // jshint ignore:line

      // On teste si la réponse est bien un array
      res.body.should.be.a('array');

      // On teste si la réponse contient bien le bon nombre d'éléments (les Params)
      res.body.length.should.equal(425);
      done();
    });
  });
});