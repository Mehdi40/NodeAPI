import mysql from 'mysql2/promise';

async function getAll(ctx) {
  const [rows] = await ctx.state.db.query('SELECT * FROM sc_user');
  ctx.body = rows;
};

async function get(ctx, id) {
  const [rows] = await ctx.state.db.query(`SELECT * FROM sc_user WHERE id = ${id}`);
  ctx.body = rows;
};

async function remove (ctx, id) {
  const [rows] = await ctx.state.db.query(`DELETE FROM sc_user WHERE id = ${id}`);
  ctx.body = rows;
};

async function add (ctx) {
  const { username, email } = ctx.request.query;
  const [rows] = await ctx.state.db.query(`INSERT INTO sc_user (email, username) VALUES ('${email}', '${username}')`);
  ctx.body = rows;
};

async function update (ctx, id) {
  const { username, email } = ctx.request.query;
  console.log(ctx);
  const [rows] = await ctx.state.db.query(`UPDATE sc_user SET email = '${email}', username = '${username}' WHERE id = ${id}`);
  ctx.body = rows; 
};

export default { getAll, get, remove, add, update };