var bookshelf = require('../../bin/database/bookshelf');

export default class BaseModel {
  constructor (tableName) {
    this.tableName = null
    this.DB = bookshelf.Model.extend({
      tableName: this.tableName
    });
  }

  setTableName (tableName) {
    this.tableName = tableName
  }

  currentDate () {
    return moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
  }

  find (column, data, fields = []) {
    if (typeOf(column) != 'string')
      throw new Error('Invalid column name')

    return this.DB
      .where(column, data)
      .fetchAll({columns: fields})
      .then(
        (res) => {
          return res
      })
  }
}