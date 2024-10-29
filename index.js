const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join (__dirname, 'views'))

app.get('/', (req, res) =>{
    res.render('index')

})
/*app.get('/about', (req, res) =>{/*kaldkriips määrab stardipaiga*/
    /*console.log(req, url)
        res.send(path.join (__dirname, 'views'))*/
    /*
})
/*console.log(app)*//*näitab ära appi sisu*/

app.listen(3001, () => {
    console.log('Server started at http://localhost:3001')
})