const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
    console.log(`Application running on => ${PORT}`)
})