const express = require('express')
const app = express()

app.use(express.static('public'))

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html")
})

app.get('/home', (request, response, next) => { 
  response.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (request, response, next) => { 
  response.sendFile(__dirname + '/views/about-page.html')
})

app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works-page.html')
})

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery-page.html')
})

app.listen(3000, () => console.log('Hosting in port 3000'))