import knex from '../modelConf'
var Bookshelf = require('bookshelf')(knex)

var User = Bookshelf.Model.extend({
  tableName: 'users',

  scouts: function () {
    return this.belongsToMany(Scout, 'user_id');
  }
});

var Users = Bookshelf.Collection.extend({
  model: User
})