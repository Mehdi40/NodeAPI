import User from '../models/Users'

async function get (ctx, id) {
  await User.where('id', id).fetch().then((user) => { ctx.body = user.attributes.username; })
};

export default { get };