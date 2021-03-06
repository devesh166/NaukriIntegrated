import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom'
import Home from './Components/home'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Company from './Components/company'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/company' component={Company} />
      </BrowserRouter>
    )
  }
}

export default App;
