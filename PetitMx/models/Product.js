module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Product'; // esto debería estar en singular
    
    let cols = {
        id_product: {
            type: dataTypes.INT(10).UNSIGNED,
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
            type: dataTypes.INT(10).UNSIGNED,
            allowNull:false,
        },
        brand_id:{
            type: dataTypes.INT(10).UNSIGNED,
            allowNull:false,
        },
        pet_id:{
            type: dataTypes.INT(4).UNSIGNED,
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
        // En proceso...
    }

    return Product;
};