const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')


// Vamos a crear un modelo

class User_sequalize extends Model {}

User_sequalize.init({
    name: DataTypes.STRING,
    birthday: DataTypes.DATE
},{
    sequelize,
    modelName: "user_sequialize"
})

module.exports = User_sequalize;

