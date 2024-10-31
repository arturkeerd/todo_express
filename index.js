const express = require('express')
/*const { fstat } = require('fs') (ei tea miks. vana reliikvia vast) */ 
const path = require('path')
const fs = require('node:fs')
const { mkdirSync } = require('fs')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join (__dirname, 'views'))

app.get('/', (req, res) =>{/*kaldkriips määrab stardipaiga*/
    fs.readFile('./tasks', 'utf-8', (error, data) => {
        if(error) {
            console.error(error)
            return 
        }
        const tasks = data.split('\n')
        res.render('index', {tasks:tasks})
    })
})

app.listen(3001, () => {
    console.log('Server started at http://localhost:3001')
})