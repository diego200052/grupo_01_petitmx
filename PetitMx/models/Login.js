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
        
        // El login/acceso pertenece a un usuario
        // y el usuario tiene un login asociado.
        
        Login.hasOne(models.User,{
            as:"users", // El nombre del modelo pero en plural
            foreignKey: "login_id"
        })

    
    }

    return Login
};