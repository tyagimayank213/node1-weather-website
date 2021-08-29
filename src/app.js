const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode')

const app = express()
const port = process.env.PORT ||3000

//define path for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath  = path.join(__dirname,'../templates/views')
const partialPath  = path.join(__dirname,'../templates/partials')


// setup handlers nd view location
app.set('view engine','hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)


app.use(express.static(publicDirectoryPath))

app.get('', (req,res) =>{
    res.render('index', {
        name: ''
    })
})

app.get('/about', (req,res) =>{
    if(!req.query.address){
        return res.send({
            error : "you must provide search term"
        })
    }
    geocode(req.query.address, (error, {latitude, longitude} = {}) =>{
        if(error) {
              return res.send("Error ", error)
        }
        forecast(latitude,longitude, (error, temperature,description,location) =>{
            if(error){
                return res.send('Error',error)
            }
            res.send({
                location,
                temperature,
                description,
                location
            })
        })
    })
})

app.get('/whether', (req,res) =>{
    res.send('index',{
        title:'WeatherApp',
        name:'Mayank'
    })
})

app.get('*', (req,res) =>{
    res.send("my 404 page")
})

app.listen(port, ()=>{
    console.log('server is up on the port'+port);
})