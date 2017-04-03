import knex from '../modelConf'
var Bookshelf = require('bookshelf')(knex)

var Scout = Bookshelf.Model.extend({
  tableName: 'scouts',
});

var Scouts = Bookshelf.Collection.extend({
  model: Scout
})