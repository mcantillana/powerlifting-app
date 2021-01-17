import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import PanelLifting from './containers/PanelLifting/PanelLifting';
import One from './components/One/One';
import Two from './components/Two/Two';

function App() {
  let routes = (
      <Switch>
          <Route path="/" exact component={PanelLifting}/>
          <Route path="/one">
              <One/>
          </Route>
          <Route path="/two">
              <Two/>
          </Route>
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