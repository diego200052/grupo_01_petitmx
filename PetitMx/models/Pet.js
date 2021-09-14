module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Pet'; // esto debería estar en singular
    
    let cols = {
        id_pet: {
            type: dataTypes.INT(4).UNSIGNED,
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
        // En proceso...
    }

    return Pet;
};