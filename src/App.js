import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import PanelLifting from './containers/PanelLifting/PanelLifting';


function App() {
  let routes = (
      <Switch>
          <Route path="/" exact component={PanelLifting}/>
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