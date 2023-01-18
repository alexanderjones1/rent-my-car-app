import mongoose from 'mongoose'
import { Host } from '../models/host.js'

function passDataToView(req, res, next) {
  const user = req.user ? req.user : null
  Host.findOne({profile: user?.profile._id})
  .then(foundHost => {
    res.locals.hostProfile = foundHost
    res.locals.user = req.user ? req.user : null
    res.locals.googleClientID = process.env.GOOGLE_CLIENT_ID
    next()
  })
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

export {
  passDataToView,
  isLoggedIn,
}
