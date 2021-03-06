const express = require('express')
const router = express.Router()
const Post = require('../database/models/Post')  // Importamos el modelo

router.get('/', (req, res)=>{
    res.send('Test pasado')
})

// CREATE
router.post('/', (req, res)=> {

    Post.create({
        title: req.body.title,
        body: req.body.body
    }).then(post => {
        res.json(post)
    }).catch(err=>{console.log(err)})

})


// READ

router.get('/:id', (req, res) => {
        // Este metodo buscar por ID
    Post.findByPk(req.params.id)
        .then(post => {res.json(post)})

 } )


// UPDATE

router.patch('/:id', (req, res)=> {


    Post.update({
        title: req.body.title,
        body: req.body.body
        },{
            where: {
                id:req.params.id
            }
        }).then(result => {
            res.json(result)
        })
})


// DELETE

module.exports = router