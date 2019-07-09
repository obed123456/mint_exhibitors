import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Exhibitors from './components/exhibitors';




function App() {
  return (
    <Router >
        <div className="App">

          <Route path="/:id" exact component={Exhibitors} />
          
        </div>
    </Router>
  );
}

export default App;
