import decode from "jwt-decode";

class AuthService {
  getUser() {
    return decode(this.getToken());
  };


};

export default new AuthService(); 