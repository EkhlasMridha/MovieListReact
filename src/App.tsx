import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './router/Main';
import { PublicRouter } from './router/public.router';

function App() {
  return (
    <PublicRouter />
  );
}

export default App;
