module.exports = (sequelize, dataTypes) => {
    
    let alias = 'ProductCart'; // esto debería estar en singular
    
    let cols = {
        cart_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
        },
        product_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
        },
        quantity:{
            type: dataTypes.SMALLINT.UNSIGNED,
            allowNull:false,
        }
    };

    let config = {
        timestamps: false,
        createdAt:  false,
        updatedAt: false,
        deletedAt: false,
        freezeTableName: true
    }

    const ProductCart = sequelize.define(alias,cols,config);

    ProductCart.associate = function (models) {
        
        ProductCart.belongsTo(models.Product, {
            as: "products",
            foreignKey: "product_id",
            oneDelete: 'cascade'
        });

        ProductCart.belongsTo(models.Cart, {
            as: "carts",
            foreignKey: "cart_id",
            oneDelete: 'cascade'
        });
    }

    return ProductCart;
};