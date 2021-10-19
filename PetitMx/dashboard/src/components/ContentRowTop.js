import React from 'react';
import InfoTotalUser from './InfoTotalUser';
import InfoTotalProduct from './InfoTotalProduct';
import InfoTotalCategories from './InfoTotalCategories';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Tarjetas de información -->*/}
					<div className="row">
						<InfoTotalUser/>
						<InfoTotalProduct/>
						<InfoTotalCategories/>
					</div>
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;