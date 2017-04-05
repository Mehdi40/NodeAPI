import Scout from '../models/Scouts'
import User from '../models/Users'

class ScoutsController {
  constructor() {
    this.currentUser.id = null
  }

  /*
  ** Getters and Setters
  */
  setCurrentUserId (id) {
    this.currentUser.id = id
  }

  getCurrentUserId (id) {
    return this.currentUser.id
  }

  /*
  ** Function that add scout to the current user
  */
  async add (id) {
    let hasScout = await Scout.hasScout(this.currentUser.id, id)

    if (!hasScout) {
      let user = await User.find('id', id, ['id'])

      if (!user) throw new Error('Invalid user')

      await Scout.add(this.currentUser.id, id)

      return { message: 'Eclaireur ajouté.' }
    }
  }

  /*
  ** Function that get scouts from the current user
  */
  async get (ctx, id) {
    let user = await User.find('id', id)

    if (!user) throw new Error('Invalid user')

    let scouts = await Scout.get(this.currentUser.id)

    ctx.body = scouts
  }
}

export default ScoutsController