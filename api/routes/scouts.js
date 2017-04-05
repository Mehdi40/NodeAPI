import Router from 'koa-joi-router'
import ScoutsController from '../controllers/scouts'

const Joi = Router.Joi
const router = new Router()

router.route({
  method: 'get',
  path: '/users/scouts',
  validate: {
    body: {
      currentUserId: Joi.number().integer()
    },
    type: 'json',
  },
  handler: async (ctx) => {
    let scouts = await ScoutsController.get(ctx.request.body.currentUserId)
    console.log('lol')
    console.log(scouts)
  },
})

router.route({
  method: 'post',
  path: '/users/scouts',
  validate: {
    body: {
      currentUserId: Joi.number().integer(),
      scoutId: Joi.number().integer()
    },
    type: 'json',
  },
  handler: async (ctx) => {
    ctx.body = await ScoutsController.add(ctx.request.body.currentUserId, ctx.request.body.scoutId)
  },
})

export default router;