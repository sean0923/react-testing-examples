import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SubRoutes from '../pages/SubRoutes';

const SwitchAndRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sub-routes" component={SubRoutes} />
      </Switch>
    </div>
  );
};

export default SwitchAndRoutes;
