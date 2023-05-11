const express = require("express");
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, '/public')))

app.listen(3050, () => {console.log("El servidor esta funcionando http://localhost:3050/")});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/home.html'))
});
app.get('/historia', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/historia.html'))
})


app.get('/poneraprueba', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/poneraprueba.html'))
})