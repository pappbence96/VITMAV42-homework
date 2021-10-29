const Schema = require('mongoose').Schema
const db = require('../config/db')
const EquipmentType = require('./equipment_type')

const Equipment = db.model('Equipment', {
  barcode: String,
  manufacturer: String,
  model: String,
  description: String,
  count: Number,

  type: {
    type: String,
    enum: Object.values(EquipmentType),
  },

  _location: {
    type: Schema.Types.ObjectId,
    ref: 'Gym',
  },
})

module.exports = Equipment
