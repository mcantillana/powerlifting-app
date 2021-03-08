import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Movements from './containers/Movements/Movements';
import Movement from './components/Movement/Movement';

function App() {
  let routes = (
      <Switch>
          <Route path="/" exact component={Movements}/>
          <Route path="/bench-press" component={Movement}/>
          <Route path="/deadlift" component={Movement}/>
          <Route path="/squat" component={Movement}/>
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