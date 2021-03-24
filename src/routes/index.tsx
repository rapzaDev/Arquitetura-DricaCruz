import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Services from '../pages/ServicesPage';
import Virtual from '../pages/VirtualPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/services" component={Services} />
    <Route path="/virtual" component={Virtual} />
  </Switch>
);

export default Routes;
