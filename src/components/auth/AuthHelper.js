import decode from "jwt-decode";

export default class AuthHelper {
    constructor(domain) {
        // Used in production
        this.domain = domain || "http://localhost:3001";
    }

    getCurrentUser() {
        const token = this.getToken();

        if (!!token && !this.isTokenExpired(token)) {
            const decoded = decode(token);
            const authObj = {
                loggedIn: true,
                name: decoded.name,
                email: decoded.email
            };

            return authObj;
        }
        return null;
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / decoded.exp) {
                // Checking if token is expired.
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        return localStorage.getItem("personaldiary_token");
    }
}
