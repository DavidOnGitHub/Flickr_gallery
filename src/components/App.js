import React from 'react';
import { RootRoutes } from './routes';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <RootRoutes />
      </div>
    );
  }
}
