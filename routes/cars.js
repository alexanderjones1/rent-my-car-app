import { Router } from 'express'
import * as carsCtrl from '../controllers/cars.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, carsCtrl.new)
router.post('/', carsCtrl.create)

export {
  router
}