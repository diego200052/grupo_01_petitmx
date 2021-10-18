module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Product'; // esto debería estar en singular
    
    let cols = {
        id_product: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        productName:{
            type: dataTypes.STRING(150),
            allowNull:false,
        },
        price:{
            type: dataTypes.DECIMAL(12,2).UNSIGNED,
            allowNull:false,
        },  
        ingredients:{
            type: dataTypes.TEXT,
            allowNull:true,
        },
        description:{
            type: dataTypes.TEXT,
            allowNull:false,
        }, 
        instructions:{
            type: dataTypes.TEXT,
            allowNull:true,
        }, 
        image:{
            type: dataTypes.STRING,
            allowNull:false,
        }, 
        subcategory_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        brand_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        pet_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        }
    };

    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        
        Product.belongsToMany(models.Cart, { 
            as: "carts",
            through: 'products_cart',
            foreignKey: 'cart_id',
            otherKey: 'product_id',
            timestamps: false,
            onDelete: 'cascade'
        });

        Product.hasMany(models.ProductCart, {
            as: "productscarts",
            foreignKey: "product_id"
        });

        Product.belongsTo(models.Pet, {
            as: "pets",
            foreignKey: "pet_id",
            oneDelete: 'cascade'
        });

        Product.belongsTo(models.Brands, {
            as: "brand",
            foreignKey: "brand_id",
            oneDelete: 'cascade'
        });

        Product.belongsTo(models.Subcategory, {
            as: "subcategorys",
            foreignKey: "subcategory_id",
            oneDelete: 'cascade'
        });

        Product.belongsToMany(models.Color, { 
            as: "colors",
            through: 'products_color',
            foreignKey: 'color_id',
            otherKey: 'product_id',
            timestamps: false,
            onDelete: 'cascade'
        });
    }

    return Product;
};