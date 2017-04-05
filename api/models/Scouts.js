var bookshelf = require('../../bin/database/bookshelf');
import User from './Users'
import BaseModel from './BaseModel'

class Scout extends BaseModel {
  constructor() {
    super('sc_scout')
  }

  /*
  ** Function that check if a user has a given scout
  **
  ** user_id => ID of the current user
  ** id => ID of the scout
  **
  ** Return TRUE if the user has a given scout
  ** Return FALSE if a the user hasn't a given scout
  */
  async hasScout (user_id, scout_id) {
    if (!id)
      throw new Error('[Scout model/hasScout] Missing id')

    await this.DB
      .where({'user_id': user_id, 'scout_id': scout_id, 'state': 1})
      .fetch({columns: 'id'})
      .then(
        (res) => { 
          return res ? true : false 
        })
      .catch(
        (err) => { 
          throw new Error(`[Scout model/hasScout] Error: ${err}`) 
        })
  }

  /*
  ** Function that get scouts of the current user
  **
  ** id => ID of the scout
  **
  ** Return TRUE if the user has a given scout
  ** Return FALSE if a the user hasn't a given scout
  */
  async get (user_id) {
    return await this.DB
      .where('user_id', user_id)
      .fetchAll()
      .then((scouts) => { 
        for (var scout of scouts.models) {
          this.currentUser.scouts += scout
        }
      })
  };

  async add (user_id, id) {
    return await new Scout({
      'user_id': user_id,
      'user_id_scout': id,
      'state': 1})
      .save()
      .then((scout) => {          
        return true
      })
      .catch((err) => {
        throw new Error(`Error: ${err}`)
      })
  }

}