import React from 'react';
import PropTypes from 'prop-types';

function SubcategoriesInDb(props){
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">{`${props["subcategorys.subcategoryName"]} - Total de productos: ${props.ProductsByCategoryCount}`}</div>
            </div>
        </div>
    )
}

SubcategoriesInDb.propTypes = {
    atritutes: PropTypes.shape({
        ProductsByCategoryCount: PropTypes.number.isRequired,
        "subcategorys.id_subcategory": PropTypes.number.isRequired,
        "subcategorys.subcategoryName": PropTypes.string.isRequired,
        "subcategorys.category_id": PropTypes.number
    })
}

export default SubcategoriesInDb;
