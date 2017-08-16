import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
