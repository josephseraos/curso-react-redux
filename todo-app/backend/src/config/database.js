const mongoose = require('mongoose')
mongoose.Promise = global.Promise // evitar warnings sobre Promise depreciado do mongoose
module.exports = mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true })