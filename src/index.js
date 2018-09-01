
import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/app/index'
import {Provider} from 'react-redux';
import Store from './store/store.js'
import 'font-awesome/css/font-awesome.min.css'
import './styles/common.css'
ReactDOM.render(<Provider store={Store}><App></App>
    </Provider>, document.getElementById('root'));