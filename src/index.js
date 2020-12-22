import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import App from './App';
import { MoviesContextProvider } from './contexts/MoviesContext';

ReactDOM.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
