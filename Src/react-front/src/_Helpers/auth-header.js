import { authenticationService } from '../_Services/authentication.service';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.accessToken) {
        return {
            Authorization: `Bearer ${currentUser.accessToken}`,
            'Content-Type': 'application/json'
        };
    } else {
        return {};
    }
}