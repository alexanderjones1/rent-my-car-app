import { Router } from 'express'
import * as hostsCtrl from '../controllers/hosts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, hostsCtrl.carsIndex)
router.get('/:id', hostsCtrl.showCar)

export {
  router,
}