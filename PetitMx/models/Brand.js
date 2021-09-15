module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Brand'; // esto debería estar en singular
    
    let cols = {
        id_brand: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        brandName:{
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

    const Brand = sequelize.define(alias,cols,config);

    Brand.associate = function (models) {
        
        Brand.hasOne(models.Product,{
            as:"products", // El nombre del modelo pero en plural
            foreignKey: "brand_id"
        })
    }

    return Brand;
};