import React from 'react';
import { Switch, Route } from 'react-router-dom';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Home from '../pages/Home';
import Form from '../pages/Form';
import Async from '../pages/Async';
import Redux from '../pages/Redux';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import { getLink, objKeys } from '../data/dataRoutes';

const SwitchAndRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={getLink({ objKey: objKeys.Home })} component={Home} />
        <Route exact path={getLink({ objKey: objKeys.Form })} component={Form} />
        <Route exact path={getLink({ objKey: objKeys.Async })} component={Async} />
        <Route exact path={getLink({ objKey: objKeys.Redux })} component={Redux} />
      </Switch>
    </div>
  );
};

export default SwitchAndRoutes;
