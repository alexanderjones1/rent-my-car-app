import { Car } from '../models/car.js'

function newCar(req, res) {
  Car.find({})
  .then(cars => {
    res.render('cars/new', {
      title: "New Car",
      cars,
    })
  })
  .catch(err => {
    res.redirect("/")
  })
}

function create(req, res) {
  Car.create(req.body)
  .then(car => {
    res.redirect(`/hosts/${host._id}`)
  })
}

export {
  newCar as new,
  create
}