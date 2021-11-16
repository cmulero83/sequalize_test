const express = require('express')
const sequelize = require('./database/db')
const User = require('./database/models/User')  // Importar el modelo


const app = express()

// inportamaos el objeto sequialize
const sequalize = require('./database/db')

const PORT = process.env.PORT || 3000

// Middleware para rellenar el req.body
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/add', (req, res)=>{
    User.create({
        name: "Carlos",
        birthday: new Date (1974, 7, 18)
    }).then(user => {res.json(user)}).catch(error => {console.log('Error en la creacion')})
} )

app.get('/buscar', (req, res) => {
        User.findAll()   // Busca y devuelve todo...
            .then(users => {
                res.json(users)
            })
    })

// Router
app.use('/api/posts', require('./routes/posts'))


app.listen(PORT, ()=> {
    console.log('Levantado en puerto 3000')

    // Conectarse al a base de datos
    // Si usamos authenticate(), sequalize no va a crear las tablas automaticametne
    // Si usamos sync({force:false}), sequalize va a crear automaticamente las tablas
    // Si usamos sync({force:trye}), sequalize hace un DROP TABLES

    sequelize.sync({force:false}).then(()=> {
        console.log("Conexion correcta a la BBDD")
    }).catch(error => {
            console.log("Error en la conexion a la base de datos")
        }
    
    )
})