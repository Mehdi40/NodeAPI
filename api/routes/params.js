async function getAll(ctx) {
  const [rows] = await ctx.state.db.query('SELECT * FROM sc_param');
  ctx.body = rows;
};

async function get(ctx, id) {
  const [rows] = await ctx.state.db.query(`SELECT * FROM sc_param WHERE id=${id}`);
  ctx.body = rows;
};

export default { getAll, get };