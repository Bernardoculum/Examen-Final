const express = require('express')
const hbs = require('hbs');

require('dotenv').config();

const port = process.env.PORT

const app = express()

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

// portafolio
app.get('/pastor_aleman', (req, res) => {
    res.render('pastor')
})

app.get('/chihuahua', (req, res) => {
    res.render('chihuahua')
})


// app.get('*', (req, res) => {
//     res.render('esto es un e')
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

})
