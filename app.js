const express = require('express')
const port = process.env.PORT


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})