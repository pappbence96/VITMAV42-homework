import db from '../config/db.js'

const Gym = db.model('Gym', {
  address: String,
  name: String,
})

export default Gym
