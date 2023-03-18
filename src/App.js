import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';
import { AppRouter } from './router/app-router';
import { Snackbar } from './components/snackbar/snackbar';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <Snackbar />
    </Provider>
  );
}

export default App;
