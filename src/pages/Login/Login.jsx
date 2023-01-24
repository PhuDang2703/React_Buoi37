import React, { Component } from 'react'
import {Navigate} from 'react-router-dom'
let login = true;
export default class Login extends Component {


  render() {

    if(login) {
      return <Navigate to="/" />
    }


    return (
      <div>Login</div>
    )
  }
}
