module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Login'; // esto debería estar en singular
    
    let cols = {
        id_login: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        email:{
            type: dataTypes.STRING(30),
            unique: true,
            allowNull:false,
        },
        password:{
            type: dataTypes.STRING(75),
            allowNull:false,
        }      
    };

    let config = {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }

    const Login = sequelize.define(alias,cols,config);

    Login.associate = function (models) {
        // En proceso...
    }

    return Login
};