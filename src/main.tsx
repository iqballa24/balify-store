import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/store';
import App from './App';

import './styles/global.css';
import 'react-tooltip/dist/react-tooltip.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { Spinner } from '@/components/UI';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
      <Toaster />
    </Provider>
  </React.StrictMode>
);
