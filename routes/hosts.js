import { Router } from 'express'
import * as hostsCtrl from '../controllers/hosts.js'

const router = Router()

router.get('/new', hostsCtrl.new)
router.post('/', hostsCtrl.create)

export {
  router
}