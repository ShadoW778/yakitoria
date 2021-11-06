const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
   title: {
      required: true,
      type: String
   },
   links: {
      type: Array
   }
},
   { versionKey: false }
)

const Items = mongoose.model('Item', menuSchema, 'Menu')

const AsideItems = mongoose.model('Item', menuSchema, 'Aside')

mongoose.connect('mongodb+srv://Light:Shadowyakitoriya@cluster0.wkls6.mongodb.net/Files', { useUnifiedTopology: true, useNewUrlParser: true })

exports.getMenu = function (request, response) {
   Items.find({}, (err, res) => {
      if (err) return console.error(err)
      response.send(res)
   })
}

exports.getAsideMenu = function (request, response) {
   AsideItems.find({}, (err, res) => {
      if (err) return console.error(err)
      response.send(res)
   })
}