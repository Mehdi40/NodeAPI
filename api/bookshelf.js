'use strict'
var knex = require('knex')(require('./knexfile'));
knex.debug(true);
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('pagination');
module.exports = bookshelf;