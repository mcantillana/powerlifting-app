import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';
import Movements from './containers/Movements/Movements';
import Movement from './components/Movement/Movement';

function App() {
  let routes = (
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/movements" exact component={Movements}/>
          <Route path="/movements/:movement" component={Movement}/>
      </Switch>
  );
  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
}

export default App;