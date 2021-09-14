module.exports = (sequelize, dataTypes) => {
    
    let alias = 'User'; // esto debería estar en singular
    
    let cols = {
        id_user: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        first_name:{
            type: dataTypes.STRING(50),
            allowNull:false,
        },
        last_name:{
            type: dataTypes.STRING(50),
            allowNull:false,
        },  
        status:{
            type: dataTypes.BOOLEAN,
            allowNull:false,
        }, 
        avatar:{
            type: dataTypes.STRING,
            allowNull:false,
        }, 
        rol_id:{
            type: dataTypes.INT(4).UNSIGNED,
            allowNull:false,
        }, 
        login_id:{
            type: dataTypes.INT(10).UNSIGNED,
            allowNull:false,
        }
    };

    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }

    const User = sequelize.define(alias,cols,config);

    User.associate = function (models) {
        // En proceso...
    }

    return User
};