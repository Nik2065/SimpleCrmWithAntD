import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css'; 

import { PrivateRoute } from './PrivateRoute';
import AppLayout from './AppLayout.jsx'
import Main from './_Components/Main'
import Login from './_Components/User/Login.jsx'
import Profile from './_Components/User/Profile.jsx'
import Landing from './Landing.jsx'
import OrderList from './_Components/Orders/OrderList.jsx'




export default class App extends React.Component {


  render(){
  return (
    <React.Fragment>
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute layout={AppLayout} path="/orders" component={OrderList}/>
        <PrivateRoute layout={AppLayout} path="/profile" component={Profile}/>
    </Switch>
    </React.Fragment>
  );
  }
}





