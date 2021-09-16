import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './App';

const ServerApp = ({ url, context, initialState }) => {
  return (
    <StaticRouter location={url} context={context}>
      <App state={initialState} />
    </StaticRouter>
  );
};

export default ServerApp;
