const restful = require('node-restful')
const mongoose = restful.mongoose

const taskSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Task', taskSchema)