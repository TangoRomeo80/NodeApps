const express = require('express')
const authRoutes = require('./routes/auth-routes')
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose')
const keys = require('./config/keys')

const app = express()

// set view engine
app.set('view engine', 'ejs')

mongoose
  .connect(keys.mongodb.dbURI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connnected successfully')
  })

// set up routes
app.use('/auth', authRoutes)

// create home route
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('app now listening for requests on port 3000')
})
