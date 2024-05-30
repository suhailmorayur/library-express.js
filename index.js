const express = require('express')
const app = express()

const booksroutes = require('./routers/booksroutes')
const authorRoutes = require('./routers/authorRoutes')
const port = 3000


app.use('/books', booksroutes)
app.use('/author',authorRoutes)







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})