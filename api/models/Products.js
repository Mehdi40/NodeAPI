var bookshelf = require('../bookshelf');
import Collection from './Collections'

var Product = bookshelf.Model.extend({
  tableName: 'sc_gen_product_fr_FR',

  collections: function() {
    return this.belongsTo(Collection, 'product_id');
  }
});

module.exports = Product