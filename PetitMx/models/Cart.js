module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Cart'; // esto debería estar en singular
    
    let cols = {
        id_cart: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        quantity:{
            type: dataTypes.SMALLINT.UNSIGNED,
            allowNull:false,
        },
        product_id:{
            type: dataTypes.INT(10).UNSIGNED,
            allowNull:false,
        },  
        user_id:{
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

    const Cart = sequelize.define(alias,cols,config);

    Cart.associate = function (models) {
        
        Cart.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id",
            oneDelete: 'cascade'
        });

        Cart.belongsToMany(models.Product, { 
            as: "products",
            through: 'products_cart',
            foreignKey: 'product_id',
            foreignKeyConstraint: true,
            otherKey: 'cart_id',
            timestamps: false,
            onDelete: 'cascade'
        });

        Cart.hasMany(models.ProductCart, {
            as: "productscarts",
            foreignKey: "cart_id"
        });
    }

    return Cart;
};