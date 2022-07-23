const express = require('express')

const app = express()

//set up view engine
app.set('view engine', 'ejs')

//create home route
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(5000, () => {
  console.log('App listening to port 5000')
})
