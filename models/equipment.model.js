import mongoose from 'mongoose'
import db from '../config/db.js'
import EquipmentType from './equipment_type.model.js'

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gym',
  },
})

export default Equipment
