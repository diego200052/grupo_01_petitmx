module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Rol'; // esto debería estar en singular
    
    let cols = {
        id_rol: {
            type: dataTypes.INT(4).UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        typeRol:{
            type: dataTypes.STRING(20),
            allowNull:false,
        }  
    };

    let config = {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }

    const Rol = sequelize.define(alias,cols,config);

    Rol.associate = function (models) {
        // El rol pertenece a un usuario
        // y el usuario tiene un rol asociado.
        
        Rol.hasOne(models.User,{
            as:"users", // El nombre del modelo pero en plural
            foreignKey: "rol_id"
        })

    }

    return Rol
};