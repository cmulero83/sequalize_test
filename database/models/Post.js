const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')

class Post extends Model {}

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT
},{

    sequelize,  // Base de datos
    modelName: "post"  // Nombre de la tabla

})

module.exports = Post;


