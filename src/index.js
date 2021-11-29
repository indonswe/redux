import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import store from './store'
import { Provider } from 'react-redux'
import { Counter } from './counter';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
//ReactDOM.render( <App/> ,document.getElementById('root'));