import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticationService } from './_Services/authentication.service';



export  const  PrivateRoute = ({ layout:Layout, component: Component, ...rest }) => (
    <Layout>
    <Route {...rest} render={  (props) =>  {

        //console.log(...rest);

        //debugger;

        const currentUser = authenticationService.currentUserValue;

        //console.log('currentUser check');
        //console.log(currentUser);

        //проверяем наличие токена 

        if (!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        else {
            //и время жизни токена
            let d = new Date();
            let expires = new Date(currentUser.expires);

            if (currentUser.expires === undefined || expires < d) {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            //console.log(props.location.pathname);
            return <Component {...props} />
        }


    }} />
    </Layout>
)