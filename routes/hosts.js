import { Router } from 'express'
import * as hostsCtrl from '../controllers/hosts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', hostsCtrl.new)
router.get('/:id', isLoggedIn, hostsCtrl.show)
router.get('/:id/edit', isLoggedIn, hostsCtrl.edit)
router.post('/', isLoggedIn, hostsCtrl.create)

export {
  router
}