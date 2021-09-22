module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Category'; // esto debería estar en singular
    
    let cols = {
        id_category: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        categoryName:{
            type: dataTypes.STRING(20),
            allowNull:false,
        } 
    };

    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false,
        freezeTableName: true
    }

    const Category = sequelize.define(alias,cols,config);

    Category.associate = function (models) {
        
        Category.hasMany(models.Subcategory, {
            as: "subcategorys",
            foreignKey: "category_id"
        });

    }

    return Category;
};