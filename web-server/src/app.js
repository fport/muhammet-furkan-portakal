const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

// Get Utils
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

app.get('/', (req, res) => {
    res.send('welcome')
})

app.get('/test_text', (req, res) => {
    res.send("Öğrenci numarası => 18360859046")
})

app.get('/test_html', (req, res) => {
    res.send('<h1>Muhammet Furkan Portakal</h1>')
})

app.get('/test_json', (req, res) => {
    res.send({
        "OgrenciNo":"18360859046",
        "Adi":"Muhammet Furkan",
        "Soyadi":"Portakal"
    }).json()
})

app.get('/test_geocode', (req, res) => {
    const city = 'bursa';
    geocode(city, (err, data) => {
        res.send(data)
    })
   
})

app.listen(PORT, () => {
    console.log(`Application running on => ${PORT}`)
})