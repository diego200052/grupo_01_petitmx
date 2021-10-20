import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id_product}</td>
                    <td>{props.productName}</td>
                    <td>{props.price}</td>
                    <td>{props.subcategorys.subcategoryName}</td>
                    <td>{props.brand.brandName}</td>
                    <td>{props.pets.pet}</td>
                </tr>
            )
    }
    
        

export default ChartRow;