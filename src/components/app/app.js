import React from 'react';
import './app.css';

import withBookstoreService from '../hoc'

const App = ({withBookstoreService}) => {
  return <div>App</div>
};

export default withBookstoreService()(App);