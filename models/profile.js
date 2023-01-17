import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  avatar: String,
  name: String,
  age: Number,
  // email: Profile.email,
  cars: { type: Schema.Types.ObjectId, ref: 'Car' }
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile,
}
