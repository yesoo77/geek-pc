import React from 'react'
import ReactDOM from 'react-dom'
//导入antd的全局样式
import 'antd/dist/antd.css'
//自己的全局样式
import './index.css'
import App from './App'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
