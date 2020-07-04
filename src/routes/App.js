import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home/Home';
import NotFound from '../components/NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
