var bookshelf = require('../../bin/database/bookshelf');
import Product from './Products'

var Collection = bookshelf.Model.extend({
  tableName: 'sc_collection',

  product: function() {
    return this.hasMany(Product, 'id');
  }
});

module.exports = Collection