import compose from 'koa-compose'
import collectionsRouter from './collections'
import scoutsRouter from './scouts'
import usersRouter from './users'
import _404Router from './_404'


export default function router() {
  return compose([
    collectionsRouter.middleware(),
    scoutsRouter.middleware(),
    _404Router.middleware(),
  ])
}