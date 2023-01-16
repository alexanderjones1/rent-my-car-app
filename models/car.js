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

const Car = mongoose.model('Car', carSchema)

export {
  Car,
}