import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LeftBar from './pages/LeftBar';
import RightBar from './pages/RightBar';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <LeftBar />
      <App />
      <RightBar />
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
