import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import LeftBar from './pages/LeftBar';
import RightBar from './pages/RightBar';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/configureStore';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <LeftBar />
        <App />
        <RightBar />
      </Provider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
