import compose from 'koa-compose'
import scoutsRouter from './scouts'


export default function router() {
  return compose([
    scoutsRouter.middleware(),
  ])
}