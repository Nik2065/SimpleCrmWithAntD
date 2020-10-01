import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css'; 

import Main from './_Components/Main'
import Login from './_Components/User/Login.jsx'
import Landing from './_Components/Landing.jsx'




export default class App extends React.Component {



  render(){
  return (
    <React.Fragment>
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/landing" component={Landing} />

    </Switch>
    </React.Fragment>
  );
  }
}





