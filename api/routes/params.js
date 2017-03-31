import mysql from 'mysql2/promise';

async function getAll(ctx) {
  const [rows] = await ctx.state.db.query('SELECT * FROM sc_param');
  ctx.body = rows;
};

export default { getAll };