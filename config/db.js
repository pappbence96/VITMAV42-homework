import mongoose from 'mongoose'
import config from './config.js'

mongoose.connect(config.db.host)

export default mongoose
