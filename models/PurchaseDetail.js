module.exports = (sequelize, dataTypes) => {
    
    let alias = 'PurchaseDetail'; // esto debería estar en singular
    
    let cols = {
        id_detail: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        product:{
            type: dataTypes.STRING(150),
            allowNull:false,
        },
        quantity:{
            type: dataTypes.SMALLINT.UNSIGNED,
            allowNull:false,
        },  
        payment:{
            type: dataTypes.STRING(30),
            allowNull:false,
        },
        total:{
            type: dataTypes.DECIMAL(12,2).UNSIGNED,
            allowNull:false,
        }, 
        image:{
            type: dataTypes.STRING,
            allowNull:false,
        }, 
        sendTo:{
            type: dataTypes.STRING(100),
            allowNull:false,
        }, 
        statusPurchase:{
            type: dataTypes.STRING(20),
            allowNull:false,
        },  
        order_id:{
            type: dataTypes.INTEGER.UNSIGNED,
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

    const PurchaseDetail = sequelize.define(alias,cols,config);

    PurchaseDetail.associate = function (models) {
        
        PurchaseDetail.belongsTo(models.Purchase, {
            as: "purchases",
            foreignKey: "order_id",
            oneDelete: 'cascade'
        });
    }

    return PurchaseDetail;
};