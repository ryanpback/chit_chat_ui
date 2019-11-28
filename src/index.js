import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/app.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'

ReactDOM.render(<App />, document.getElementById('root'))

axios.defaults.baseURL = process.env.REACT_APP_API_URL

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
