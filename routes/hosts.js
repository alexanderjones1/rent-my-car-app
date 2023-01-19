import { Router } from 'express'
import * as hostsCtrl from '../controllers/hosts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', hostsCtrl.new)
router.get('/:id', isLoggedIn, hostsCtrl.show)
router.get('/:id/edit', isLoggedIn, hostsCtrl.edit)
router.get('/:hostId/cars/:carId', hostsCtrl.showCar)
router.post('/', isLoggedIn, hostsCtrl.create)
router.post("/:id/cars", isLoggedIn, hostsCtrl.addCar)
router.put('/:id/', isLoggedIn, hostsCtrl.update)
router.delete('/:hostId/cars/:carId', isLoggedIn, hostsCtrl.delete)

export {
  router
}