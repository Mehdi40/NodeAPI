var bookshelf = require('../bookshelf');
import Scouts from './Scouts'

var User = bookshelf.Model.extend({
  tableName: 'sc_user'
});

module.exports = User