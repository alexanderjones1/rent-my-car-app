import mongoose from 'mongoose'

const Schema = mongoose.Schema

const hostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  age: Number,
  eligible: Boolean,
  name: String,
  email: String,
  avatar: String,
  cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }]
}, {
  timestamps: true
})

const Host = mongoose.model('Host', hostSchema)

export {
  Host,
}