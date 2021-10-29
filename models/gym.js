const db = require('../config/db')

const Gym = db.model('Gym', {
  address: String,
  name: String,
})

module.exports = Gym
