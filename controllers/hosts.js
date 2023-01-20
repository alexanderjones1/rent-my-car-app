import { Host } from '../models/host.js'


function newHost(req, res) {
  Host.find({})
  .then(hosts => {
    console.log("this is the hosts avatar", hosts.avatar);
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
  req.body.profile = req.user.profile._id
  req.body.avatar = req.user.profile.avatar
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
  .populate("profile")
  .then(host => {
    console.log(res.locals);
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

function addCar(req, res) {
  Host.findById(req.params.id)
  .then(host => {
    req.body.host = req.params.id
    host.cars.push(req.body)
    host.save()
    .then(() => {
      res.redirect(`/hosts/${host._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function carsIndex(req, res) {
  Host.find({})
  .then(hosts => {
    let cars = []
    for (let host of hosts){
      for (let car of host.cars){
        car.avatar = req.user.profile.avatar
        car.name = req.user.profile.name
        cars.push(car)
      }
    }
    res.render('cars/index', {
      cars,
      title: "What interests you?",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function showCar(req, res) {
  Host.findById(req.params.hostId)
  .then (host => {
    const car = host.cars.id(req.params.carId)
    res.render('cars/show', {
      car,
      title: 'Car Detail'
    })
  })
}

function deleteCar(req, res) {
  Host.findById(req.params.hostId)
  .then(host => {
    const car = host.cars.id(req.params.carId)
    if (car.host.equals(res.locals.hostProfile._id)) {
      host.cars.remove(car)
      host.save()
      .then(()=> {
        res.redirect(`/hosts/${req.params.hostId}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect(`/hosts/${req.params.hostId}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/hosts/${req.params.hostId}`)
  })
}

export {
  newHost as new,
  create,
  show,
  edit,
  update,
  addCar,
  carsIndex,
  showCar,
  deleteCar as delete,
}