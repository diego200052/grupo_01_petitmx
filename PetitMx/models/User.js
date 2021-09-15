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
        // El login/acceso pertenece a un usuario
        // y el usuario tiene un login asociado.
        User.belongsTo(models.Login, {
            as: "logins",
            foreignKey: "login_id",
            oneDelete: 'cascade'
        });

        // El rol pertenece a un usuario
        // y el usuario tiene un rol asociado.
        User.belongsTo(models.Rol, {
            as: "rols",
            foreignKey: "rol_id",
            oneDelete: 'cascade'
        });

        User.hasMany(models.Purchase, {
            as: "purchases",
            foreignKey: "user_id"
        });

        User.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "user_id"
        });


    };

    return User
};