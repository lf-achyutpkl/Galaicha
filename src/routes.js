import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './pages/App';
import CustomDesign from './pages/CustomDesign';
import DesignMain from './pages/actual/designMain';
import Page2 from './pages/page2';

let routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute component={DesignMain}/>
      <Route path={'/custom-design'} component={CustomDesign}></Route>
      <Route path={'/page2'} component={Page2}></Route>
      <Route path={'/design'} component={DesignMain}></Route>
      <Route path="*" component={CustomDesign}></Route>
    </Route>
  </Router>
);

export default routes;
