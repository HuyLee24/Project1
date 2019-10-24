import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginView from './components/LoginView';
import ExampleProtectedView from './components/ExampleProtectedView';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './components/Auth';
import axios from 'axios';
import constants from './constants.json';
import Register from './components/Register';
import Google from './Google'
import Titles from './components/Titles';
import ShowCharger from './ShowCharger';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      someData: null
    };
  }  

  onLogin = () => {
    this.setState({ isAuthenticated: true })
  }

  onLoginFail = () => {
    this.setState({ isAuthenticated: false });
    console.log("Login failed");
  }

  /* This function illustrates how some protected API could be accessed */
  loadProtectedData = () => {
    axios.get(constants.baseAddress + '/hello-protected', Auth.getAxiosAuth()).then(results => {
      this.setState({ someData: results.data });
    })
  }

  register = (event)=>
  {
    event.preventDefault();
    console.log('post');
    axios.post(constants.baseAddress +'/users', {
    username: event.target['username'].value,
    password: event.target['password'].value
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {

    return (
      <Router>
            <Titles />
        <Route path="/" exact render={ routeProps => <Google {...routeProps} />}/>
        <p>
            <ShowCharger />
        </p>
        
        <Route path="/" exact render={ routeProps => <Register register={this.register} {...routeProps} /> }/>
        <Route path="/" exact render={
          (routeProps) =>
            <LoginView
              loginSuccess = { this.onLogin }
              loginFail = { this.onLoginFail }
              userInfo={ this.state.userInfo }
              redirectPathOnSuccess="/example"
              {...routeProps}
              />
        } />
        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/example" exact render={
            (routeProps) =>
              <ExampleProtectedView
                loadProtectedData={ this.loadProtectedData }
                someData={ this.state.someData }
                />
          }>          
        </ProtectedRoute>
      </Router>
    )
  }
}