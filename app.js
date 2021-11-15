const express = require('express')
const sequelize = require('./database/db')
const app = express()

// inportamaos el objeto sequialize
const sequalize = require('./database/db')

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('Hola Mundo')
} )

app.listen(PORT, ()=> {
    console.log('Levantado en puerto 3000')

    // Conectarse al a base de datos
    sequelize.authenticate().then(()=> {
        console.log("Conexion correcta a la BBDD")
    }).catch(error => {
            console.log("Error en la conexion a la base de datos")
        }
    
    )
})