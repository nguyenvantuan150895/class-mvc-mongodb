const mongoose = require('mongoose');
const dbconnect = mongoose.connect('mongodb://localhost/dbProduct',{ useNewUrlParser: true });

module.exports = dbconnect;