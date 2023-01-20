import mongoose from 'mongoose'

const Schema = mongoose.Schema

const carSchema = new Schema({
  make: String,
  model: String,
  color: String,
  price: String,
  avatar: String,
  name: String,
  host: {type: Schema.Types.ObjectId, ref: 'Profile'},
  renters: { type: Schema.Types.ObjectId, ref: 'Renter' },
}, {
  timestamps: true
})

const hostSchema = new Schema({
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
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
}