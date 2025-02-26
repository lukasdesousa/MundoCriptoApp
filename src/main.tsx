import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
      <HashRouter basename='/'>
          <Provider store={store}>
            <App />
          </Provider>
      </HashRouter>
  </React.StrictMode>,
);
