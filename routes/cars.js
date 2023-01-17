import { Router } from 'express'
import * as carsCtrl from '../controllers/cars.js'

const router = Router()

router.get('/new', carsCtrl.new)
router.post('/', carsCtrl.create)

export {
  router
}