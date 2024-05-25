const { MongoClient } = require('mongodb');

let dbConnection
let url = 'mongodb+srv://TestConnect:<oc3egxAH0z1LT8tI>@cluster0.xworycx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

module.exports = {
  connectToDb: (cb) => {
    // MongoClient.connect('mongodb://localhost:27017/bookstore')
    MongoClient.connect(url)
      .then(client => {
        dbConnection = client.db()
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}