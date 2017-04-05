import Collection from '../models/Collections'
import Products from '../models/Products'

async function get (ctx, user_id, page) {
  const { universe, tri } = ctx.request.body
  await Collection.forge({'user_id': user_id}).fetchPage({withRelated:['product'], pageSize: 5, page: page}).then((res) => { console.log(res.toJSON().product) })
};

export default { get };