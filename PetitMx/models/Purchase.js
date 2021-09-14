module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Purchase'; // esto debería estar en singular
    
    let cols = {
        id_order: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        details:{
            type: dataTypes.STRING(50),
            allowNull:true,
        },
        statusDetail:{
            type: dataTypes.STRING(20),
            allowNull:false,
        },  
        comments:{
            type: dataTypes.STRING(100),
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
        deletedAt: false,
    }

    const Purchase = sequelize.define(alias,cols,config);

    Purchase.associate = function (models) {
        // En proceso...
    }

    return Purchase;
};