import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/Layout';
import './style/theme.css';

ReactDOM.render(
    
  <React.StrictMode>
    <App />
    <Layout></Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();
reportWebVitals();
