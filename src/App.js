import { Block } from '@actovos-consulting-group/ui-core';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SEO from './seo';
import About from './views/about';

function NotFound() {
  return (
    <div>
      <div>
        <h1>Sorry, can’t find that.</h1>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route path="/about" component={About} />
        <Route
          path="/"
          render={() => {
            return (
              <>
                <SEO title="home" description="home page test" />
                <Block bg="red">hello</Block>
              </>
            );
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
