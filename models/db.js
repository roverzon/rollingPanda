const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rollingPanda',() => {
  console.log('mongodb connected')
});

module.exports = mongoose;
