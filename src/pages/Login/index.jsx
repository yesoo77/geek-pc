import React, { Component } from 'react'
import { Card } from 'antd'
import '../Login/index.css'
import logo from '../../assets/logo.png'
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img src={logo} alt="" className="login-logo" />
        </Card>
      </div>
    )
  }
}
