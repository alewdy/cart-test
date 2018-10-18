import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './state/store';
import registerServiceWorker from './registerServiceWorker';
import './libs/cart/api';
import { addToCart } from './state/cart/actions';

const store = configureStore({  });

store.dispatch(addToCart('599598ac2f70ac1ab85b301e', 2));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
