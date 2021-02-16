const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const taskService = require('../api/task/taskService')
    taskService.register(router, '/tasks')
}