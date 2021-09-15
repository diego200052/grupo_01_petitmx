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
        
        ProductColor.belongsTo(models.Product, {
            as: "products",
            foreignKey: "product_id",
            oneDelete: 'cascade'
        });

        ProductColor.belongsTo(models.Color, {
            as: "colors",
            foreignKey: "color_id",
            oneDelete: 'cascade'
        });
    }

    return ProductColor;
};