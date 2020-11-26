const express = require('express')
const port = 3001
const router = require('./router')


const app = express()
var cors = require('cors')

 
app.use(cors())

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(router)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
