import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import NotFound from './NotFound';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      	
        <div id="wrapper">

          <SideBar />

          <Switch>
          
            <Route exact path="/" component={ ContentWrapper }/>
                        
            {/* <Route path="/genres" component={ GenresInDb }/>
            
            <Route path="/lastmovie" component={ LastMovieInDb }/>
            
            <Route path="/content" component={ ContentRowMovies }/>

            <Route path="/search" component={ SearchMovies }/> */}

            <Route component={NotFound} />

          </Switch>
          
        
        </div>

    </React.Fragment>
  );
}

export default App;
