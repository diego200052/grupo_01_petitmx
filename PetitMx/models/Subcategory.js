module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Subcategory'; // esto debería estar en singular
    
    let cols = {
        id_subcategory: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        subcategoryName:{
            type: dataTypes.STRING(30),
            allowNull:false,
        },
        category_id:{
            type: dataTypes.INT(4).UNSIGNED,
            allowNull:false
        }
    };

    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }

    const Subcategory = sequelize.define(alias,cols,config);

    Subcategory.associate = function (models) {
       
        Subcategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "subcategory_id"
        });

        Subcategory.belongsTo(models.Category, {
            as: "categorys",
            foreignKey: "category_id",
            oneDelete: 'cascade'
        });

    }

    return Subcategory;
};