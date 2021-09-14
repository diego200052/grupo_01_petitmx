module.exports = (sequelize, dataTypes) => {
    
    let alias = 'ProductColor'; // esto debería estar en singular
    
    let cols = {
        color_id: {
            type: dataTypes.INT(4).UNSIGNED,
            primaryKey: true,
            allowNull:false,
        },
        product_id:{
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            allowNull:false
        },
        quantity:{
            type: dataTypes.SMALLINT.UNSIGNED,
            allowNull:false,
        }
    };

    let config = {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }

    const ProductColor = sequelize.define(alias,cols,config);

    ProductColor.associate = function (models) {
        // En proceso...
    }

    return ProductColor;
};