import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import SearchProducts from './SearchProducts';
import SubcategoriesInDb from './SubcategoriesInDb';
import NotFound from './NotFound';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      	
        <div id="wrapper">

          <SideBar />

          <Switch>
          
            <Route exact path="/" component={ ContentWrapper }/>

            <Route path="/subcategories" component={ SubcategoriesInDb }/>
                        
            {/* <Route path="/genres" component={ GenresInDb }/>
            
            <Route path="/lastmovie" component={ LastMovieInDb }/>
            
            <Route path="/content" component={ ContentRowMovies }/> */}

            <Route path="/search" component={ SearchProducts }/>

            <Route component={NotFound} />

          </Switch>
          
        
        </div>

    </React.Fragment>
  );
}

export default App;
