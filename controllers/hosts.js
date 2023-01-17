import { Host } from '../models/host.js'

function newHost(req, res) {
  Host.find({})
  .then(hosts => {
    res.render('hosts/new', {
      title: "New Host",
      hosts,
    })
  })
  .catch(err => {
    res.redirect("/")
  })
}

function create(req, res) {
  req.body.name = req.user.profile.name
  req.body.email = req.user.email
  req.body.eligible = req.body.age > 20 ? true : false
  Host.create(req.body)
  .then(host => {
    res.redirect(`/hosts/${host._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/hosts/new')
  })
}

function show(req, res) {
  Host.findById(req.params.id)
  .populate("user")
  .then(host => {
    res.render('hosts/show', {
      host,
      title: "Host Detail"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/hosts/new')
  })
}

export {
  newHost as new,
  create,
  show
}