import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now()) {
      localStorage.removeItem("id_token");
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) { 
    localStorage.setItem("id_token", idToken); 
    window.location.assign("/"); 
  }

  logout() { 
    localStorage.removeItem("id_token"); 
    window.location.reload(); 
  }
}

export default new AuthService();
