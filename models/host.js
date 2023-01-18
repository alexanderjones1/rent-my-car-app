import mongoose from 'mongoose'

const Schema = mongoose.Schema

const carSchema = new Schema({
  make: String,
  model: String,
  color: String,
  price: String,
  renters: { type: Schema.Types.ObjectId, ref: 'Renter' },
}, {
  timestamps: true
})

const hostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  age: Number,
  eligible: Boolean,
  name: String,
  email: String,
  avatar: String,
  cars: [carSchema]
}, {
  timestamps: true
})

const Host = mongoose.model('Host', hostSchema)

export {
  Host,
  Car,
}