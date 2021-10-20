import React from 'react';
import LastUserInDb from './LastUserInDb';
import LastProductInDb from './LastProductInDb';
import Chart from './Chart';
//import SubcategoriesInDb from './SubcategoriesInDb';

function ContentRowCenter(){
    return (
        <div className="row d-sm-flex aligns-items-center justify-content-center mb-4">
            
            {/*<!-- Last User in DB -->*/}
            <LastUserInDb />
            {/*<!-- End content row last user in Data Base -->*/}

            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last propduct in Data Base -->*/}

            {/*<!-- Subcategories in DB -->*/}
            {/* <SubcategoriesInDb /> */}

            {/*<!-- List of products in DB -->*/}
            <Chart />

        </div>
    )
}

export default ContentRowCenter;