import mongoose from 'mongoose'

const Schema = mongoose.Schema

const renterSchema = new Schema({
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
  age: Number,
  eligible: Boolean,
}, {
  timestamps: true
})

const Renter = mongoose.model('Renter', renterSchema)

export {
  Renter,
}