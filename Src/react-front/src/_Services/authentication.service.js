import { BehaviorSubject } from 'rxjs';

import { config }from './config';
import { authHeader, handleResponse } from '../_Helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value },
    checkRouteAccess
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                "Login": username,
                "Password": password
            })
    };

    return fetch(`${config.apiUrl}/User/Token`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
    window.location.reload();
}

function checkRouteAccess(route:string) {

    //console.log(route);

    const requestOptions =
    {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/User/CheckPageAccess?route=${route}`, requestOptions)
        .then(handleResponse);
}