module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Color'; // esto debería estar en singular
    
    let cols = {
        id_color: {
            type: dataTypes.INT(4).UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        colorName:{
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

    const Color = sequelize.define(alias,cols,config);

    Color.associate = function (models) {
        // En proceso...
    }

    return Color;
};