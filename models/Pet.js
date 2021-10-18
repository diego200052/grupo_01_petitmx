module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Pet'; // esto debería estar en singular
    
    let cols = {
        id_pet: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        pet:{
            type: dataTypes.STRING(20),
            allowNull:false,
        }
    };

    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }

    const Pet = sequelize.define(alias,cols,config);

    Pet.associate = function (models) {
        
        Pet.hasOne(models.Product,{
            as:"products", // El nombre del modelo pero en plural
            foreignKey: "pet_id"
        })


    }

    return Pet;
};