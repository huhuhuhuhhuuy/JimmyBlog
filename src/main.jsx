import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'


// import {isDev} from './utils'
// import articleData from './mock/data.js'
// import './mock/mockServer.js'

// if (isDev()) {
  // import('./mock/mockServer.js').then(()=>{
  //   console.log('mock server started');
  // });
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
)
