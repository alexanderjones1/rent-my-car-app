import { Profile } from '../models/profile.js'

function newHost(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('hosts/new', {
      title: "New Host",
      profiles,
    })
  })
  .catch(err => {
    res.redirect("/")
  })
}

function create(req, res) {
  Profile.create(req.body)
  .then(host => {
    res.redirect('/cars/new')
  })
}

export {
  newHost as new,
  create
}