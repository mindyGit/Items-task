
const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
    label: {
        type: String,
      
    },
    type: {
        type: String,
       

    },
    value: {
        type: String,
       

    }
})
module.exports = mongoose.model('Item', itemSchema)