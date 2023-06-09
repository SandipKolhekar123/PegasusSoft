import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DarkModeContextProvider } from './Context/DarkModeContext';
import store from '../src/Store/index'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <React.StrictMode>
      <BrowserRouter>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
 
);

