import React, {Component} from 'react';

import ChartRow from './ChartRow';

class Chart extends Component{

	constructor(){
		super()
		this.state = {
			movies: []
		}
	};

	//Montaje
    componentDidMount(){
    
        fetch('https://petitmx.herokuapp.com/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(movies =>{
            console.log("LISTA: ",movies.products)
            this.setState({movies: movies.products})
        })
        .catch(error => console.log(error))

    }

	render(){

		return(
			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
                        <div className="col-sm-12 col-lg-12 text-center">
                            <h1 className="h3 mb-2 text-gray-800">All products in DB</h1>

                        </div>	
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead className="thead-light">
											<tr>
												<th>#</th>
												<th>Name</th>
												<th>Price</th>
												<th>Subcategory</th>
												<th>Brand</th>
                                                <th>Pet</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
                                                <th>ID</th>
												<th>Name</th>
												<th>Price</th>
												<th>Subcategory</th>
												<th>Brand</th>
                                                <th>Pet</th>
											</tr>
										</tfoot>
										<tbody>
											{
												this.state.movies.map( (movie, index) => {
													return < ChartRow {...movie} key = {index} />
												})
											}
										</tbody>
									</table>
								</div>
							</div>
						</div>            
			</React.Fragment>
		)
	}    
}


export default Chart;