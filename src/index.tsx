import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, Store as ReduxStore } from 'redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { posts } from './reducers/postReducer';
import { Provider } from 'react-redux';

// @ts-ignore
const store: ReduxStore<any> = createStore(posts, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  console.log('Store state: ' + JSON.stringify(store.getState(), null, 2))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
