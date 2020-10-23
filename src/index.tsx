import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import NotFound from './NotFound';
import { Comments } from './components/Comments/Comments';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Redirect exact={true} from="/" to="/r/funny"/>
        <Route 
          exact={true} 
          path="/r/:subreddit">
          <App/>
        </Route>
        <Route 
          exact={true} 
          path="/r/:subreddit/comments/:id/:title">
            <Comments/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

