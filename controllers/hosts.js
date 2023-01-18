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
  req.body.avatar = req.user.profile.avatar
  req.body.eligible = req.body.age > 20 ? true : false
  console.log(req.body);
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

function edit(req, res) {
  Host.findById(req.params.id)
  .then(host => {
    res.render("hosts/edit", {
      host,
      title: "Edit Host Details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update(req, res) {
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  Host.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(host => {
    res.redirect(`/hosts/${host._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  newHost as new,
  create,
  show,
  edit,
  update,
}