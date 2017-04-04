var bookshelf = require('../bookshelf');
import User from './Users'

var Scout = bookshelf.Model.extend({
  tableName: 'sc_scout'
});

module.exports = Scout