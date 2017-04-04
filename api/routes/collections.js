import Collection from '../models/Collections'
import Products from '../models/Products'

async function get (ctx, user_id, page) {
  await Collection.where(
    'user_id', user_id
    ).fetchAll({
      columns: ['product_id']
    }).then(async (collection) => { 
      var IDs = collection.models.map(function(a) {return a.attributes.product_id;});
      await Products.where({
        'type_id': 1
      }).where('id', 'IN', IDs).orderBy('rating', 'DESC').fetchPage({pageSize: 10, page: page}).then((products) => {
        var titles = products.models.map(function(a) {return a.attributes.title;});
        ctx.body = titles
      })
  })
};

export default { get };